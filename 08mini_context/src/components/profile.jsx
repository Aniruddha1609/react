import react, { useContext } from "react";
import userContext from "../context/user_context";

function Profile() {
    const { user } = useContext(userContext);
    if (!user) return <div>Please Login</div>;

    return <div>Welcome {user.username}</div>;
}

export default Profile;
