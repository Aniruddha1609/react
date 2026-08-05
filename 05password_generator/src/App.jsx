import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import "tailwindcss";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordRef = useRef(null);

  const getPassword = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "0123456789";
    if (charsAllowed) string += "!@#$%^&*-_+=[]{}~`";
    for (let curr = 1; curr <= length; curr++) {
      const index = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(index);
    }
    setPassword(pass);
  };

  const passwordGenerator = useCallback(getPassword, [
    length,
    numberAllowed,
    charsAllowed,
    setPassword,
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charsAllowed, numberAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-1 text-orange-400 bg-gray-700 text-center">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name="password"
            value={password}
            ref={passwordRef}
            className="outline-none w-full px-3 py-1 bg-white text-black"
            placeholder="Password"
            readOnly
          />
          <button
            className="outline-none bg-blue-500 text-white px-3 py-1 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              onChange={() => setCharsAllowed((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
