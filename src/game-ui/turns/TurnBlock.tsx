import type { CellType } from "../../game-manager/enums";

interface TurnBlockProps {
    title: string;
    turnType: CellType;
}

export default function TurnBlock({ title, turnType }: TurnBlockProps) {
    return (
        <div className="turn-block">
            <span className="turn-title">{title}</span> 

            {/* TODO: Add image based on turn type */}
            <div className="turn">
                { turnType &&
                  <>
                  {
                    turnType === "X"
                    ? <img className="cross" src="/src/assets/cross.svg" />
                    : <img className="circle" src="/src/assets/circle.svg" />
                  }
                  </>    
                }
            </div> 
        </div>
    );
}