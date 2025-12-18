import type { GameState } from "../../game-manager/enums";

export default function useGameState(gameState: GameState) {
    switch (gameState) {
        case 'not-started':
            return {
                message: "Waiting for players...",
                buttonActive: false
            };

        case 'in-progress':
            return {
                message: "Good luck!",
                buttonActive: false
            };

        case 'win':
            return {
                message: "You win!",
                buttonActive: true
            };
        
        case 'lose':
            return {
                message: "Uh-oh, you lose!",
                buttonActive: true
            };

        case 'tie':
            return {
                message: "It's a tie!",
                buttonActive: true
            };

        case 'interrupted':
            return {
                message: "Other player disconnected",
                buttonActive: true
            };

        default: {
            const _exhaustive: never = gameState;
            return _exhaustive;
        }
    }
}