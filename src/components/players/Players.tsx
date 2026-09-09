import { use } from "react";
import type { Iplayer } from "../types/Type";
import AvailablePlayers from "./AvailablePlayers";

interface PlayerProps {
  playerPromise: Promise<Iplayer[]>;
}

const Players = ({ playerPromise }: PlayerProps) => {
  const players = use(playerPromise)

  return (
    <div className="max-w-7xl mx-auto">

        <div className="flex justify-between gap-4 mt-5">
            <h2 className="font-bold text-xl">Availabe Players</h2>
            <div>
                <button className="btn btn-warning">Available</button>
            <button className="btn">Selected</button>
            </div>
        </div>

      <AvailablePlayers player={players} />
    </div>
  );
};

export default Players;
