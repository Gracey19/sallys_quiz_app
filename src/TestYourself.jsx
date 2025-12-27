import { useNavigate, Link } from "react-router-dom";

function TestYourself() {
  const navigate = useNavigate();

  return (
    /* 1. I removed bg-white and min-h-screen to let App.jsx background show */
    <div className="w-full">

      <div className="max-w-5xl mx-auto">
        
        <header className="flex items-center mb-16 justify-between px-4 md:px-8 py-5">
          <Link
            to="/home"
            className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-nairobi-dark dark:text-white hover:underline whitespace-nowrap leading-none mb-0.5"
          >
            Home
          </Link>

          <img
            src="/images/logo/sallys_logo.png"
            alt="Sally's Logo"
            className="h-4 md:h-12 w-auto"
          />

          <div className="flex items-center gap-4 md:gap-8">
            <Link
              to="/test"
              className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-nairobi-dark dark:text-white hover:underline whitespace-nowrap leading-none"
            >
              Test yourself
            </Link>
            <Link
              to="/about"
              className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-nairobi-dark dark:text-white hover:underline leading-none"
            >
              About
            </Link>
          </div>
        </header>

        <main className="text-center px-6 mt-10">
          <h1 className="text-[20px] font-semibold font-montserrat mb-8 text-nairobi-dark dark:text-white">
            Quiz me baby, one more time!
          </h1>

          <h2 className="text-[20px] font-semibold font-montserrat mb-16 text-nairobi-dark dark:text-white">
            Wilkommen in der Quizzone! <br />
            Make a pick and let’s get started
          </h2>

          <div className="flex flex-col items-center gap-12 pb-24">
            <img 
              src="/images/icons/a1_butt.svg" 
              alt="A1 Button" 
              className="w-40 h-auto cursor-pointer hover:scale-105 transition-transform dark:brightness-110"
              onClick={() => navigate("/a1")} 
            />

            <img 
              src="/images/icons/a2_butt.svg" 
              alt="A2 Button" 
              className="w-40 h-auto cursor-pointer hover:scale-105 transition-transform dark:brightness-110"
              onClick={() => navigate("/home")} 
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default TestYourself;

