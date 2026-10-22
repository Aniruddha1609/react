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
    <div className="bg-gray-700 min-h-screen pb-10">
      <div className="bg-gray-950 flex flex-wrap justify-center items-center gap-4 py-4 px-4 mb-4 shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITz8nRCWavl9QQPcajY0t_U-IV86CE5tMkOMZ3zFAXg&s=10"
          alt="pokedex"
          className="h-16 sm:h-20 w-auto object-contain rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25BT2vL7cPHfMoyMgAJtGT5z3ileZf7ts9MK8aDcqjw&s=10"
          alt="pokedex"
          className="h-16 sm:h-20 w-auto object-contain rounded-xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {chunks.map((pokeChunk, index) => (
          <Cardbox key={index} pokeChunk={pokeChunk} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 my-8 px-4">
        {prevPageLink && (
          <div className="flex gap-2 justify-evenly">
            <button
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-lg py-2 px-4 text-amber-50 shadow"
              onClick={handleBeginning}
            >
              Beginning
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-lg py-2 px-4 text-amber-50 shadow"
              onClick={handlePrevPage}
            >
              Prev
            </button>
          </div>
        )}

        <button
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all rounded-lg py-2 px-4 text-amber-50 shadow"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
