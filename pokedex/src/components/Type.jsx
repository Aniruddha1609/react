import React, { useEffect, useState } from "react";

function Type({ typeName }) {
    const [color, setColor] = useState("");
    const getBackgroundColor = (type) => {
        switch (type) {
            case "POISON":
                return "rgb(122, 0, 204)";

            case "GRASS":
                return "rgb(82,128,15)";

            case "FIRE":
                return "rgb(235, 64, 52)";

            case "FLYING":
                return "rgb(4, 149, 217)";

            case "BUG":
                return "rgb(192, 217, 4)";

            case "WATER":
                return "rgb(4, 29, 217)";

            case "NORMAL":
                return "rgb(51, 51, 0)";

            case "ELECTRIC":
                return "rgb(255, 204, 0)";

            case "GROUND":
                return "rgb(102, 153, 153)";

            case "FAIRY":
                return "rgb(255, 204, 204)";

            case "FIGHTING":
                return "rgb(153, 102, 51)";

            case "PSYCHIC":
                return "rgb(153, 51, 102)";

            case "STEEL":
            case "ROCK":
                return "rgb(79, 99, 99)";

            case "ICE":
                return "rgb(95, 237, 237)";

            case "GHOST":
                return "rgb(102, 0, 102)";

            default:
                return "rgb(156, 163, 175)";
        }
    };

    return (
        <span
            style={{ backgroundColor: getBackgroundColor(typeName) }}
            className="px-3 py-1 ${color}  text-white text-xs font-semibold rounded-md shadow-sm"
        >
            {typeName}
        </span>
    );
}

export default Type;
