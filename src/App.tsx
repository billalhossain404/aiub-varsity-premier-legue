import { Suspense } from "react";
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
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-info"></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} />
      </Suspense>
    </>
  );
}

export default App;
