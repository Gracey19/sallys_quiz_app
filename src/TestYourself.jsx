import { useNavigate } from "react-router-dom";
function TestYourself() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F0E2DF]">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-5"> 
        <a
          href="/home"
          className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline whitespace-nowrap leading-none mb-0.5"
        >
          Home
        </a>

        <img
          src="/images/logo/sallys_logo.png"
          alt="Sally's Logo"
          className="h-4 md:h-12 w-auto"
        />

        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="/test"
            className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline whitespace-nowrap leading-none"
          >
            Test yourself
          </a>
          <a
            href="/about"
            className="text-xs md:text-sm font-medium tracking-wide font-montserrat text-[#335E40] hover:underline leading-none"
          >
            About
          </a>
        </div>
      </header>

      <div className="text-center">
        <h1
          className="text-[20px] font-semibold font-montserrat mb-8"
          style={{ color: "#335E40" }}
        >
          Quiz me baby, one more time!
        </h1>

        <h2
          className="text-[20px] font-semibold font-montserrat mb-16"
          style={{ color: "#335E40" }}
        >
          Wilkommen in der Quizzone! <br />
          Make a pick and let’s get started
        </h2>
      </div>

      <div className="flex justify-center mb-24">
        <img 
          src="/images/icons/a1_butt.svg" 
          alt="A1 Button" 
          className="w-40 h-auto cursor-pointer hover:opacity-90 transition"
          onClick={() => navigate("/a1")} 
        />
      </div>

      <div className="flex justify-center mb-24">
        <img 
          src="/images/icons/a2_butt.svg" 
          alt="A2 Button" 
          className="w-40 h-auto cursor-pointer hover:opacity-90 transition mb-16"
          onClick={() => navigate("/home")} 
        />
      </div>

    </div>
  );
}

export default TestYourself;

