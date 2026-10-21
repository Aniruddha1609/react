import React, { useContext, useEffect, useId, useState } from "react";
import context from "../context/context";
import Type from "./Type";

function Card({ pokeUrl }) {
    const { setPokeId } = useContext(context);
    const [pokeData, setPokeData] = useState(null);

    useEffect(() => {
        fetch(pokeUrl)
            .then((res) => res.json())
            .then((data) => {
                setPokeData(data);
            });
    }, [pokeUrl]);

    const match = pokeUrl.match(/\/(\d+)\/?$/);
    const pokeId = match ? match[1] : "";

    return (
        <div className="max-w-xs w-full p-4 font-sans bg-gray-200 mx-3 my-6 border-2 border-gray-800 rounded-lg flex flex-col justify-between shadow-md">
            <div>
                {/* Fixed height container for uniform image sizing */}
                <div className="bg-gray-100 rounded-xl h-40 p-4 flex items-center justify-center mb-3 overflow-hidden">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                        alt={pokeData?.name || "pokemon"}
                        className="w-full h-full object-contain"
                    />
                </div>

                <span className="text-gray-600 font-medium text-xs tracking-wide">
                    #{pokeId.toString().padStart(4, "0")}
                </span>

                <h2 className="text-xl font-bold text-gray-800 mt-1 mb-3 truncate">
                    {pokeData?.name?.toUpperCase()}
                </h2>
            </div>

            {/* Type badges pinned to the bottom */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {pokeData?.types?.map((types) => (
                    <Type
                        typeName={types.type.name.toUpperCase()}
                        key={types.type.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Card;
