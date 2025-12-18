import type { GameState } from "../../game-manager/enums";
import useGameState from "./useGameState";


interface GameStateComponentProps {
    gameState: GameState;
}

export default function GameStateComponent({ gameState }: GameStateComponentProps) {
    const { message, buttonActive } = useGameState(gameState);

    return (
        <section className="game-state">
            <p className="game-state-msg">{message}</p>
            <button className="try-again-btn" 
                    style={{ display: buttonActive ? "block" : "none" }}>
                Try Again
            </button>
        </section>
    );
}