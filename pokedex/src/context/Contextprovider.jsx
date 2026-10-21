import { useState } from "react";
import context from "./context";

export const Contextprovider = ({ children }) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokeData, setPokeData] = useState({});
    const [pokemonList, setPokemonList] = useState([]);
    const [pokeId, setPokeId] = useState(1);
    const [leftEnd, setLeftEnd] = useState(-4);
    const [pokeChunk, setPokeChunk] = useState([]);

    return (
        <context.Provider
            value={{
                pokemon,
                setPokemon,
                pokeData,
                setPokeData,
                pokeId,
                setPokeId,
                pokemonList,
                setPokemonList,
                leftEnd,
                setLeftEnd,
                pokeChunk,
                setPokeChunk,
            }}
        >
            {children}
        </context.Provider>
    );
};
