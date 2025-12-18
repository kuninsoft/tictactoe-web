export type CellType = null | "X" | "O";

export type GameState = "not-started" | "in-progress" | "win" | "lose" | "tie" | "interrupted"

export type BoardChange = 
    | { type: "cell", row: number; column: number; value: CellType }
    | { type: "reset", board: CellType[][] }