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

  const handleNextPage = () => {
    if (nextPageLink) setUrl(nextPageLink);
  };

  const handlePrevPage = () => {
    if (prevPageLink) setUrl(prevPageLink);
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
  for (let i = 0; i < pokemonList.length; i += 4) {
    chunks.push(pokemonList.slice(i, i + 4));
  }

  return (
    <div className="bg-gray-700">
      <div className="min-h-auto my-2.2 bg-gray-600 flex ">
        <img
          src="https://in.portal-pokemon.com/public_assets/images/pokedex/pokedex_logotype.svg"
          alt="pokedex"
          height={100}
          width={200}
          className="ml-6 py-10"
        />
        <img
          src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/853/461/datas/original.png"
          alt="pokedex"
          height={50}
          width={50}
          className="ml-3 py-10"
        />
      </div>
      <div>
        {chunks.map((pokeChunk, index) => (
          <Cardbox key={index} pokeChunk={pokeChunk} />
        ))}
      </div>
      <div className="flex justify-center">
        {prevPageLink && (
          <button
            className="bg-blue-500 h-xs min-w-auto rounded-lg my-5 mx-2 p-2 cen text-amber-50"
            onClick={handlePrevPage}
          >
            Prev
          </button>
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
