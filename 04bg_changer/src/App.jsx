import { useState } from "react";
import "./App.css";
import Btn from "./Btn";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-blue-900 px-3 py-2 rounded-2xl">
          <Btn btnColor="red" setColor={setColor} />
          <Btn btnColor="black" setColor={setColor} />
          <Btn
            btnColor="white"
            textColor="black"
            setColor={setColor}
          />
          <Btn btnColor="green" setColor={setColor} />
          <Btn
            btnColor="yellow"
            textColor={"black"}
            setColor={setColor}
          />
          <Btn btnColor="purple" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
