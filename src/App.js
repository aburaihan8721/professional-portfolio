import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Motors from "./components/Motors/Motors";
import HomeWrapper from "./components/HomeWrapper/HomeWrapper";
import Travel from "./components/Travel/Travel";
import Health from "./components/Health/Health";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="motors" element={<Motors />} />
        <Route path="travel" element={<Travel />} />
        <Route path="health" element={<Health />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
