import type { GameState } from "../../game-manager/enums";
import useGameState from "./useGameState";
import "../styles/game-state.scss";

interface GameStateComponentProps {
    gameState: GameState;
}

export default function GameStateComponent({ gameState }: GameStateComponentProps) {
    const { message, buttonActive } = useGameState(gameState);

    return (
        <section className="game-state">
            <p className="game-state-msg">{message}</p>
            <button className="try-again-btn" 
                    style={{ display: buttonActive ? "block" : "none" }}
                    onClick={() => window.location.reload()}>
                Try Again
            </button>
        </section>
    );
}