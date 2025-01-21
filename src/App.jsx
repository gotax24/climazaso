import { useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import "./css/App.css";
import Show from "./components/Show";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const weather = () => {
    if (!city) return;

    axios
      .get(
        `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <Header />
      <input
        type="search"
        id="city"
        value={city}
        placeholder="Busca tu ciudad aqui"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={weather}>Buscar</button>

      <Show data={data} />
    </>
  );
}

export default App;
