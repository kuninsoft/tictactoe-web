import type { CellType } from "../../game-manager/enums";
import TurnBlock from "./TurnBlock";

interface TurnsComponentProps {
    currentTurn: CellType;
    playerType: CellType;
}

export default function TurnsComponent({ currentTurn, playerType }: TurnsComponentProps) {
    return (
        <section className="turns">
            <TurnBlock title="Current" turnType={currentTurn} />
            <TurnBlock title="You" turnType={playerType} />
        </section>
    );
}