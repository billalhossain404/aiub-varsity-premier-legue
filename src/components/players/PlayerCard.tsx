import { SlUser, SlBadge, SlSpeedometer, SlTag } from "react-icons/sl";
import type { Iplayer } from "../types/Type";
import playerImg from "../../assets/player.JPG";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

const roleAccent: Record<string, string> = {
  Batter: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Bowler: "text-cyan-300 border-cyan-300/30 bg-cyan-300/10",
  "All-rounder": "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Wicketkeeper: "text-violet-400 border-violet-400/30 bg-violet-400/10",
};

interface IAvailabeProps {
  player:Iplayer;
  coin : number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const PlayerCard = ({ player, coin, setCoin }: IAvailabeProps) => {
  const ratingPct = Math.min(100, Math.round((player.rating / 70) * 100));
  const accent =
    roleAccent[player.type] ??
    "text-slate-300 border-slate-400/30 bg-slate-400/10";

    const handleSelectPlayer = () =>{
          setIsSelected(true);

          const newPrice = coin - player.price;
          if(newPrice>0){
            setCoin(newPrice)
            toast.success(`${player.playerName} is Purchased Successfully`)
          }
          else{
            toast.error("Insouciant Balance")
          }
    }

    const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-cyan-300/10 bg-gradient-to-b from-[#0C2D6B] to-[#081E4D] shadow-lg shadow-blue-950/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-cyan-900/30">

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081E4D] via-[#0C2D6B]/20 to-transparent" />


        <div className="absolute left-3 top-3 flex h-12 w-12 flex-col items-center justify-center rounded-full border border-cyan-200/20 bg-[#0C2D6B]/80 backdrop-blur">
          <span className="text-base font-bold leading-none text-white">
            {player.rating}
          </span>
          <span className="text-[9px] leading-none text-cyan-200/70">
            rating
          </span>
        </div>


        <span
          className={`absolute right-3 top-3 flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${accent}`}
        >
          <SlBadge className="h-3 w-3" />
          {player.type}
        </span>
      </div>


      <div className="space-y-4 px-5 pb-5 pt-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
            <SlUser className="h-4 w-4 text-cyan-200/70" />
            {player.playerName}
          </h2>
          <p className="mt-0.5 pl-6 text-sm text-cyan-100/60">
            {player.department}
          </p>
        </div>


        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-cyan-100/60">
            <span className="flex items-center gap-1">
              <SlSpeedometer className="h-3 w-3" /> Form rating
            </span>
            <span className="text-cyan-50">{player.rating} / 70</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-cyan-200/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
              style={{ width: `${ratingPct}%` }}
            />
          </div>
        </div>


        <div className="flex items-center justify-between rounded-xl border border-cyan-200/10 bg-cyan-200/[0.05] px-3 py-2 text-sm">
          <div>
            <p className="text-[11px] text-cyan-200/60">Batting</p>
            <p className="text-cyan-50">{player.battingStyle}</p>
          </div>
          <div className="h-8 w-px bg-cyan-200/15" />
          <div className="text-right">
            <p className="text-[11px] text-cyan-200/60">Bowling</p>
            <p className="text-cyan-50">{player.bowlingStyle}</p>
          </div>
        </div>


        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5">
            <SlTag className="h-4 w-4 text-cyan-300" />
            <span className="text-xl font-bold text-white">
              ${player.price.toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            onClick={handleSelectPlayer }
            disabled={isSelected}
            className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-[#081E4D] transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-60 disabled:hover:bg-slate-400"
          >
            {isSelected ?  "Selected" : "Choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
