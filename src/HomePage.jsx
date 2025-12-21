function HomePage() {
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

      <main className="flex justify-center px-6 py-12">
        <div className="max-w-3xl text-left">
          <p className="text-[20px] font-montserrat text-[#335E40] font-normal leading-relaxed mb-10">
            Welcome to your German grammar testing hub! This site is designed for learners at the A1 and A2 levels who want to challenge themselves with short, focused quizzes. Whether you're brushing up before an exam or just curious about your progress, we welcome you to practice, reflect, and grow. Enjoy!
          </p>

          <div className="w-full flex justify-center mt-6">
            <a href="/test">
              <img
                src="/images/icons/test_yourself_butt.svg"
                alt="Test Yourself Button"
                className="w-40 h-auto hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>


      </main>

    </div>
  );
}

export default HomePage;

