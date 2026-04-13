import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Players from "./components/players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayer = async () => {
  const res = await fetch("/playerData.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState(10000000);

  const playersPromise = fetchPlayer();
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playersPromise={playersPromise}
          coin={coin}
          setCoin={setCoin}
        ></Players>
      </Suspense>
      {/* react toastify */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
