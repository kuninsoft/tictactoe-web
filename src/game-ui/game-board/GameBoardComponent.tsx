import type GameBoard from "../../game-manager/game-board";
import { useGameBoard } from "./useGameBoard";

interface GameBoardProps {
    gameBoard: GameBoard;
}

export default function GameBoardComponent({ gameBoard }: GameBoardProps) {
    const board = useGameBoard(gameBoard);

    return (
        <section className="game-board">
            {
                board.map(row => 
                    row.map(cell => 
                        <button className="cell">{cell}</button>
                    )
                )
            }
        </section>
    );
}