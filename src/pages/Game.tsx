import GameBoard from "../game-manager/game-board";
import GameBoardComponent from "../game-ui/game-board/GameBoardComponent";
import GameStateComponent from "../game-ui/game-state/GameStateComponent";
import TurnsComponent from "../game-ui/turns/TurnsComponent";


export default function Game() {
    return (
        <>
            <TurnsComponent currentTurn={null} playerType="X" />
            <GameStateComponent gameState="in-progress" />
            <GameBoardComponent gameBoard={new GameBoard()} />
        </>
    );
}