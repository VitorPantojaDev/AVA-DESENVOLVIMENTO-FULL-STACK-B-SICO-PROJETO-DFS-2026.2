import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import PlaceholderPage from "./pages/PlaceholderPage/PlaceholderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegistrationPage />} />
      <Route path="/quadras" element={<PlaceholderPage titulo="Quadras" />} />
      <Route path="/reservar" element={<PlaceholderPage titulo="Reservar Horário" />} />
      <Route path="/perfil" element={<PlaceholderPage titulo="Meu Perfil" />} />
    </Routes>
  );
}

export default App;
