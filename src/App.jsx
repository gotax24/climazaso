import { useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import "./css/App.css";
import Show from "./components/Show";
import Modal from "./components/Modal";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const weather = () => {
    if (!city) return;

    axios
      .get(
        `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`
      )
      .then((response) => {
        setData(response.data);
        openModal();
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
      <button className="button-app" onClick={weather}>
        Buscar
      </button>

      {data && (
        <>
          <button className="button-app" onClick={openModal}>
            Abrir modal
          </button>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <Show data={data} />
          </Modal>
        </>
      )}
    </>
  );
}

export default App;
