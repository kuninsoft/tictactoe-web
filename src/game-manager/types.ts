import type { CellType } from "./enums"

export type JoinedResponse = {
    role: CellType;
}

export type GameStartedResponse = {
    nextTurn: CellType;
}

export type MoveMadeResponse = {
    row: number;
    column: number;
    moveInitiator: CellType;
    nextTurn: CellType;
    gameEnd: boolean;
}

export type GameEndResponse = {
    gameEnd: GameEnd;
}

export type MoveAckResponse = {
    accepted: boolean;
}

export type MakeMoveRequest = {
    row: number;
    column: number;
}

type GameEnd = "Tie" | "Win" | "Lose" | "Interrupted";