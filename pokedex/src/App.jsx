import { useContext, useEffect, useState } from "react";
import "./App.css";
import context from "./context/context";
import Cardbox from "./components/Cardbox";

function App() {
  const {
    pokemonList,
    setPokemonList,
  } = useContext(context);

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageLink, setNextPageLink] = useState("");
  const [prevPageLink, setPrevPageLink] = useState("");
  const firstPage = "https://pokeapi.co/api/v2/pokemon";

  const handleNextPage = () => {
    if (nextPageLink) setUrl(nextPageLink);
  };

  const handlePrevPage = () => {
    if (prevPageLink) setUrl(prevPageLink);
  };

  const handleBeginning = () => {
    setUrl(firstPage);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setPrevPageLink(data.previous);
        setNextPageLink(data.next);
        window.scrollTo(0, 0);
      });
  }, [url]);

  const chunks = [];
  for (let pokemonNo = 0; pokemonNo < pokemonList.length; pokemonNo += 4) {
    chunks.push(pokemonList.slice(pokemonNo, pokemonNo + 4));
  }

  return (
    <div className="bg-gray-700">
      <div className="min-h-auto my-2.2 bg-gray-950 flex justify-center pb-1 mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITz8nRCWavl9QQPcajY0t_U-IV86CE5tMkOMZ3zFAXg&s=10"
          alt="pokedex"
          height={100}
          width={250}
          className="ml-6 py-10 rounded-2xlsm"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25BT2vL7cPHfMoyMgAJtGT5z3ileZf7ts9MK8aDcqjw&s=10"
          alt="pokedex"
          height={100}
          width={200}
          className="py-10 rounded-2xlsm"
        />
      </div>
      <div>
        {chunks.map((pokeChunk, index) => (
          <Cardbox key={index} pokeChunk={pokeChunk} />
        ))}
      </div>
      <div className="flex justify-center">
        {prevPageLink && (
          <div className="flex gap-2 justify-evenly">
            <button
              className="bg-blue-500 h-xs min-w-auto rounded-lg my-5 p-2 cen text-amber-50"
              onClick={handleBeginning}
            >
              Beginning
            </button>

            <button
              className="bg-blue-500 h-xs min-w-auto rounded-lg my-5 mx-2 p-2 cen text-amber-50"
              onClick={handlePrevPage}
            >
              Prev
            </button>
          </div>
        )}

        <button
          className="bg-blue-500 h-xs min-w-auto rounded-lg my-5 p-2 cen text-amber-50"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
