import React from "react";
import userContext from "./user_context";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};
