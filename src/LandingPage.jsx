import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    // Inline styling 
    <div 
      className="p-6 min-h-screen flex flex-col items-center justify-center" 
      style={{ backgroundColor: "#F0E2DF" }}
    >
      
      <img
        src="/images/logo/sallys_logo.png"
        alt="Sally's Quiz App logo"
        className="w-64 h-auto sm:w-80"
      />
      
      <h1
        className="text-[40px] font-bold font-montserrat mb-8"
        style={{ color: "#335E40" }}
      >
        SALLY’S PRACTICE DECK
      </h1>

      <h2
        className="text-[40px] font-bold font-montserrat mb-16"
        style={{ color: "#335E40" }}
      >
        Hi there! Ready to test your Deutsch?
      </h2>

      <img 
        src="/images/icons/start_button.svg" 
        alt="Start Button" 
        className="w-40 h-auto cursor-pointer mb-24"
        
        onClick={() => navigate("/home")} 
      />
    </div>
  );
}

export default LandingPage;

