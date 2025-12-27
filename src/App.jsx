import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import TestYourself from "./TestYourself";
import A1Page from "./A1Page";
import GutenTag from "./pages/GutenTag";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); 
   
  useEffect(() => { 
    if (theme === "dark") { 
      document.documentElement.classList.add("dark"); 
    } else { 
      document.documentElement.classList.remove("dark"); 
    } 
    localStorage.setItem("theme", theme);
  }, [theme]); 
  
  const toggleTheme = () => { 
    setTheme(theme === "light" ? "dark" : "light"); 
  };

return (
  <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900 dark:bg-nairobi-dark dark:text-white">
    <Router>

      <div className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full font-bold border-2 border-nairobi-dark bg-nairobi-dark text-white dark:bg-white dark:text-nairobi-dark dark:border-white shadow-lg"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="flex-grow: 1;">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<TestYourself />} />
          <Route path="/a1" element={<A1Page />} />
          <Route path="/gutentag" element={<GutenTag />} />
        </Routes>
      </div>
    </Router>
  </div>
  );
}

export default App;

