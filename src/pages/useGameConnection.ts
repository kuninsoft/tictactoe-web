import * as signal from '@microsoft/signalr';
import { useCallback, useEffect, useMemo, useState } from "react";
import { type GameState, type CellType } from "../game-manager/enums";
import GameBoard from "../game-manager/game-board";
import type { GameEndResponse, GameStartedResponse, JoinedResponse, MoveMadeResponse } from '../game-manager/types';

export function useGameConnection() {
    const [game, setGame] = useState({
        role: null as CellType | null,
        blocked: true,
        state: 'not-started' as GameState,
        current: null as CellType | null,
    });
    const [connection, setConnection] = useState<signal.HubConnection | null>(null);

    const gameBoard = useMemo(() => new GameBoard(), []);

    useEffect(() => {
        const conn = new signal.HubConnectionBuilder()
            .withUrl("http://localhost:5226/game")
            .build();

        conn.on("PlayerJoined", (response: JoinedResponse) => {
            handleJoin(response.role);
        });

        conn.on("GameStarted", (response: GameStartedResponse) => {
            handleGameStart(response.nextTurn);
        });

        conn.on("MoveMade", (response: MoveMadeResponse) => {
            gameBoard.setCell(response.row, response.column, response.moveInitiator);
            updateGameState(response.nextTurn, response.gameEnd);
        });

        conn.on("GameEnd", (response: GameEndResponse) => {
            let state: GameState = 'tie';
            
            switch (response.gameEnd) {
                case 'Tie': {
                    state = 'tie';
                    break;
                }
                case 'Win': {
                    state = 'win';
                    break;
                }
                case 'Lose': {
                    state = 'lose';
                    break;
                }
                case 'Interrupted': {
                    state = 'interrupted';
                    break;
                }
            }

            setGame((prev) => ({...prev, state: state, blocked: true}));
        })

        conn.start().catch(console.error);

        setConnection(conn);

        return () => {
            conn.off("PlayerJoined");
            conn.off("GameStarted");
            conn.off("MoveMade");
            conn.off("GameEnd");
            conn.stop();
        };
    },[]);

    function handleJoin(playerRole: CellType) {
        setGame((prev) => ({...prev, role: playerRole, state: 'not-started' as GameState, blocked: true}));
    }

    function handleGameStart(nextTurn: CellType) {
        setGame((prev) => ({...prev, 
            current: nextTurn, 
            state: 'in-progress' as GameState,
            blocked: prev.role !== nextTurn}));
    }

    function updateGameState(nextTurn: CellType, isEnd: boolean) {
        setGame((prev) => ({...prev, 
            current: nextTurn,
            blocked: isEnd || prev.role !== nextTurn}));
    }

    const makeMove = useCallback(async (row: number, column: number) => {
        if (!connection) {
            throw new Error("SignalR connection not established");
        }

        const result = await connection.invoke<boolean>("MakeMove", { Row: row, Column: column });

        if (!result) {
            console.warn("Move not accepted");
        }
    }, [connection]);

    return {game, gameBoard, makeMove};
}