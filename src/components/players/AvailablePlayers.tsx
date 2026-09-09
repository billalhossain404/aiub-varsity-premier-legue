import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../types/Type";
import PlayerCard from "./PlayerCard";

interface IAvailabeProps {
  player:Iplayer;
  coin : number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({ player, coin, setCoin } : IAvailabeProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {player.map((player : Iplayer, idx:number ) => {
        return (
                <PlayerCard key={idx} player = {player} coin = {coin} setCoin= {setCoin}/>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
