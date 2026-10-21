import React, { useContext, useEffect } from "react";
import Card from "./Card";
import context from "../context/context";

function Cardbox({ pokeChunk }) {
    // const { leftEnd, setLeftEnd } = useContext(context);

    // useEffect(() => {
    //     setLeftEnd(leftEnd + 4);
    // }, []);

    // let pokeChunk = pokemonList.slice(leftEnd, leftEnd + 4);
    return (
        <div className="flex justify-evenly">
            {pokeChunk.map((pokemonData) => (
                <Card
                    key={pokemonData.name}
                    pokeUrl={pokemonData.url}
                />
            ))}
        </div>
    );
}

export default Cardbox;
