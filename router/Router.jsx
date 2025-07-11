import { BrowserRouter, Route, Routes } from "react-router-dom";
import Champions from "../src/pages/champions/Champions";
import Loldle from "../src/pages/home/Loldle";
import ChampionDetails from "../src/pages/champions/ChampionDetails";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loldle />} />
        <Route path="/champs" element={<Champions />} />
        <Route path="/champs/:id" element={<ChampionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
