import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch(
    //         "https://api.github.com/users/Aniruddha1609",
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);
    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-2xl">
            Github Followers : {data.followers}
            <img
                src={data.avatar_url}
                alt="Git Picture"
                className="text-center w-4xs h-80"
            />
        </div>
    );
}

export default Github;

export const getGithubUserInfo = async () => {
    const response = await fetch("https://api.github.com/users/Aniruddha1609");
    return await response.json();
};
