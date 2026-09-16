import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/auth_slice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
        <div className="w-full block">
          <header>Header</header>
          <main>
            TODO: {/* <Outlet /> */}
          </main>
          <footer>Footer</footer>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
