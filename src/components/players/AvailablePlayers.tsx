import type { Iplayer } from "../types/Type";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ player } : {player : Iplayer[]}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {player.map((player : Iplayer, idx:number ) => {
        return (
                <PlayerCard key={idx} player = {player}/>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
