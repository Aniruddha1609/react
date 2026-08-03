import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import "tailwindcss";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind Test
      </h1>
      <br />
      <Card
        imageURL="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        name="Bored ape nft accidental"
      />
      <br />
      <Card
        imageURL="https://mir-s3-cdn-cf.behance.net/projects/404/956c1c156310853.Y3JvcCw4MDgsNjMyLDAsMA.jpg"
        name="Goku Autonomous Ultra Instinct"
      />
    </>
  );
}

export default App;
