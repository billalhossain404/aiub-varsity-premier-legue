import { use, useState } from "react";
import type { Iplayer } from "../types/Type";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayer from "./SelectedPlayer";

interface PlayerProps {
  playerPromise: Promise<Iplayer[]>;
}

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise)

  const [buttonType, setButton] = useState("available");


  return (
    <div className="max-w-7xl mx-auto">

        <div className="flex justify-between gap-4 mt-5 mb-5">
            <h2 className="font-bold text-xl">Availabe Players</h2>
            <div>
                <button  onClick={() => setButton("available")}
                className={ `${buttonType === "available" ? "btn-warning" : ""} btn  rounded-r-none`}>Available</button>
            <button  onClick={() => setButton("selected")}
            className={ `${buttonType === "selected" ? "btn-warning" : ""} btn  rounded-l-none`}>Selected</button>
            </div>
        </div>

      {buttonType == "available" ? <AvailablePlayers player={players} /> : (<SelectedPlayer/>)}
    </div>
  );
};

export default Players;
