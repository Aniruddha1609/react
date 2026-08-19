import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import { UserContextProvider } from "./context/user_context_provider";

function App() {
    return (
        <UserContextProvider>
            <h1>Context Api</h1>
            <Login />
            <Profile />
        </UserContextProvider>
    );
}

export default App;
