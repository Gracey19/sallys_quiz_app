import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GutenTag() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/GutenTag.json")
      .then(res => res.json())
      .then(data => setQuiz(data))
      .catch(err => console.error("Failed to load quiz:", err));
  }, []);

  if (!quiz) return <p className="text-center text-xl mt-20 dark:text-white">Loading…</p>;

  const handleClick = (index, option, correct) => {
    setAnswers(prev => {
      if (prev[index]) return prev;
      const isCorrect = option === correct;
      return {
        ...prev,
        [index]: { selected: option, isCorrect }
      };
    });
  };

  const totalQuestions = quiz.dialogue.filter(q => q.options).length;
  const score = Object.values(answers).filter(a => a.isCorrect).length;
  const allAnswered = Object.keys(answers).length === totalQuestions;

  return (
    <div className="w-full transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-5">
        <Link to="/home" className="text-xs md:text-sm font-medium text-[#335E40] dark:text-white hover:underline">
          Home
        </Link>
        <img src="/images/logo/sallys_logo.png" alt="Sally's Logo" className="h-4 md:h-12 w-auto" />
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/test" className="text-xs md:text-sm font-medium text-[#335E40] dark:text-white hover:underline">
            Test yourself
          </Link>
          <Link to="/about" className="text-xs md:text-sm font-medium text-[#335E40] dark:text-white hover:underline">
            About
          </Link>
        </div>
      </header>

      <main className="px-4 md:px-8 py-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-[#335E40] dark:text-white mb-6 text-center">{quiz.topic}</h1>
        
        <div className="w-40 h-40 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/illustrations/Guten_Tag.png"
            alt="Quiz Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-lg text-[#335E40] dark:text-white/90 font-medium italic leading-relaxed mb-8 text-center bg-gray-50 dark:bg-white/10 p-4 rounded-xl">
          "{quiz.context}"
        </p>

        <div className="space-y-8">
          {quiz.dialogue.map((entry, index) => (
            <div key={index} className="pb-6">
              <p className="text-lg text-[#335E40] dark:text-white mb-3">
                <strong className="opacity-70">{entry.speaker}:</strong> {entry.line}
              </p>
              
              {entry.options && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {entry.options.map((opt, i) => {
                    const answer = answers[index];
                    const isSelected = answer?.selected === opt;
                    const isCorrect = answer?.isCorrect;

                    // Dynamic styling for buttons
                    let buttonStyles = "border-2 border-[#335E40] dark:border-white text-[#335E40] dark:text-white bg-transparent";
                    
                    if (isSelected) {
                      buttonStyles = isCorrect 
                        ? "bg-green-500 border-green-500 text-white shadow-md" 
                        : "bg-red-500 border-red-500 text-white shadow-md";
                    } else if (answer) {
                      buttonStyles = "opacity-50 border-gray-300 dark:border-white/20 text-gray-400 dark:text-white/40 cursor-not-allowed";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleClick(index, opt, entry.correct)}
                        disabled={!!answer}
                        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${buttonStyles} ${!answer && 'hover:bg-[#335E40] hover:text-white dark:hover:bg-white dark:hover:text-[#335E40]'}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {allAnswered && (
          <div className="mt-12 p-8 text-center text-[#335E40] dark:text-white transition-all animate-in fade-in zoom-in">
            <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
            <p className="text-4xl font-black mb-6">
              {score} / {totalQuestions}
            </p>
    
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl bg-white dark:bg-[#335E40] text-[#335E40] dark:text-white font-bold shadow-lg hover:scale-105 transition-all"
              >
                Back
              </button>

              <button
                className="px-6 py-3 rounded-xl bg-white dark:bg-[#335E40] text-[#335E40] dark:text-white font-bold shadow-lg hover:scale-105 transition-all"
              >
                Next Topic
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default GutenTag;

