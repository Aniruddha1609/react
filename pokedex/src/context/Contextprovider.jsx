import { useState } from "react";
import context from "./context";

export const Contextprovider = ({ children }) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokeData, setPokeData] = useState({});
    const [pokemonList, setPokemonList] = useState([]);
    const [pokeId, setPokeId] = useState(1);

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
            }}
        >
            {children}
        </context.Provider>
    );
};
