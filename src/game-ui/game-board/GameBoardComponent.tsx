import type GameBoard from "../../game-manager/game-board";
import { useGameBoard } from "./useGameBoard";

interface GameBoardProps {
    gameBoard: GameBoard;
    blocked: boolean;
    onMove: (row: number, column: number) => void;
}

export default function GameBoardComponent({ gameBoard, blocked, onMove }: GameBoardProps) {
    const board = useGameBoard(gameBoard);

    return (
        <section className="game-board">
            {
                board.map((row, rowIndex) => 
                    row.map((cell, colIndex) => 
                        <button key={`${rowIndex}-${colIndex}`} 
                                className="cell" 
                                disabled={blocked} 
                                onClick={() => onMove(rowIndex, colIndex)}>
                            { cell &&
                                <>
                                {
                                  cell === "X"
                                  ? <img className="cross" src="/src/assets/cross.svg" />
                                  : <img className="circle" src="/src/assets/circle.svg" />
                                }
                                </>
                            }
                        </button>
                    )
                )
            }
        </section>
    );
}