import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 h-full flex flex-col items-center justify-center text-nairobi-dark dark:text-white">
      <img
        src="/images/logo/sallys_logo.png"
        alt="Sally's Quiz App logo"
        className="w-64 h-auto sm:w-80"
      />
      
      <h1
        className="text-[40px] text-center font-bold font-montserrat mb-8"
      >
        SALLY’S PRACTICE DECK
      </h1>

      <h2
        className="text-[40px] text-center font-bold font-montserrat mb-16"
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

