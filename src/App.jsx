import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import TestYourself from "./TestYourself";
import A1Page from "./A1Page";
import GutenTag from "./pages/GutenTag";

function App() {
  // 1. Theme state (Checking local storage so it remembers user choice)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); 
  
  // 2. Apply theme to <html> so Tailwind can use dark: classes 
  useEffect(() => { 
    if (theme === "dark") { 
      document.documentElement.classList.add("dark"); 
    } else { 
      document.documentElement.classList.remove("dark"); 
    } 
    localStorage.setItem("theme", theme);
  }, [theme]); 
  
  // 3. Toggle function 
  const toggleTheme = () => { 
    setTheme(theme === "light" ? "dark" : "light"); 
  };

  // App.jsx
return (
  <div className="min-h-screen flex flex-col transition-colors duration-300 bg-white text-gray-900 dark:bg-nairobi-dark dark:text-white">
    <Router>
      {/* This div contains the button */}
      <div className="p-4 flex justify-end">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full font-bold border-2 border-[#335E40] bg-[#335E40] text-white dark:bg-white dark:text-[#335E40] dark:border-white shadow-lg"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* The Routes now sit inside the same green container */}
      <div className="flex-grow">
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

