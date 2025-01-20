import { useState } from "react";
import Menu from "./components/Menu";
import axios from "axios";

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
      <Menu />
      <input
        type="search"
        id="city"
        value={city}
        placeholder="Busca tu ciudad aqui"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={weather}>Buscar</button>
    </>
  );
}

export default App;
