import React from "react";
import Card from "./Card";

function Cardbox({ pokeChunk }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center w-full max-w-7xl mx-auto px-4 my-6">
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
