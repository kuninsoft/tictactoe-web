import type { BoardChange, CellType } from "./enums";

export default class GameBoard {
    private listeners = new Set<(change: BoardChange) => void>();
    
    private board: CellType[][] = [
        [ null, null, null ],
        [ null, null, null ],
        [ null, null, null ]
    ];

    setCell(row: number, column: number, cell: CellType) {
        this.board[row][column] = cell;
        this.emit({ type: 'cell', row: row, column: column, value: cell });
    }

    reset() {
        this.board = [
            [ null, null, null ],
            [ null, null, null ],
            [ null, null, null ]
        ];

        this.emit({ type: 'reset', board: structuredClone(this.board) });
    }

    subscribe(listener: (change: BoardChange) => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private emit(change: BoardChange) {
        this.listeners.forEach(l => l(change));
    }
}