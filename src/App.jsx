import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import TestYourself from "./TestYourself";
import A1Page from "./A1Page";
import GutenTag from "./pages/GutenTag";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/test" element={<TestYourself />} />
        <Route path="/a1" element={<A1Page />} />
        <Route path="/gutentag" element={<GutenTag />} />
      </Routes>
    </Router>
  );
}

export default App;

