import GameBoardComponent from "../game-ui/game-board/GameBoardComponent";
import GameStateComponent from "../game-ui/game-state/GameStateComponent";
import TurnsComponent from "../game-ui/turns/TurnsComponent";
import { useGameConnection } from "./useGameConnection";


export default function Game() {
    const {game, gameBoard, makeMove} = useGameConnection();

    return (
        <>
            <TurnsComponent currentTurn={game.current} playerType={game.role} />
            <GameStateComponent gameState={game.state} />
            <GameBoardComponent gameBoard={gameBoard} onMove={makeMove} blocked={game.blocked} />
        </>
    );
}