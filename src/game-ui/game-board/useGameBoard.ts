import { useEffect, useState } from "react";
import type GameBoard from "../../game-manager/game-board";
import type { CellType } from "../../game-manager/enums";
import "../styles/game-board.scss";

export function useGameBoard(gameBoard: GameBoard) {
    const [board, setBoard] = useState<CellType[][]>([[null, null, null],
                                                      [null, null, null],
                                                      [null, null, null]]);

    useEffect(() => {
        return gameBoard.subscribe((change) => {
            setBoard(prev => {
                switch (change.type) {
                    case 'cell': {
                        const newBoard = [...prev];
                        newBoard[change.row][change.column] = change.value;
                        return newBoard;
                    }

                    case 'reset': 
                        return change.board;
                }
            })
        })
    }, [gameBoard]);

    return board;
}