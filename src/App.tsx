import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Players from "./components/players/Players";
import type { Iplayer } from "./components/types/Type";

const playerFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const playerPromise = playerFetch();
  const [coin, setCoin] = useState(7000);
  return (
    <>
      <Nav coin = {coin}/>
      <Banner />
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-info"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} coin={coin} setCoin = {setCoin} />
      </Suspense>
    </>
  );
}

export default App;
