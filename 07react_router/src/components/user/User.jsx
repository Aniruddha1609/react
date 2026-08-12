import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { id } = useParams();
    return <h5 className="text-center text-black">User : {id}</h5>;
}

export default User;
