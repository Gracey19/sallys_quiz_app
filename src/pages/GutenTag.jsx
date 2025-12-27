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
      .catch(err => console.error("Could not load quiz:", err));
  }, []);

  
  const handlePick = (index, choice, isCorrectChoice) => {
    
    if (answers[index]) return;

    setAnswers(prev => ({
      ...prev,
      [index]: { 
        picked: choice, 
        isCorrect: choice === isCorrectChoice 
      }
    }));
  };

  const questions = quiz?.dialogue.filter(item => item.options) || [];
  const total = questions.length;
  const score = Object.values(answers).filter(a => a.isCorrect).length;
  const finished = Object.keys(answers).length === total && total > 0;

  if (!quiz) return <p className="text-center mt-20 dark:text-white">Loading...</p>;

  return (
    <div className="w-full transition-colors duration-300">
    
      <header className="flex items-center justify-between px-4 md:px-8 py-5">
        <Link to="/home" className="text-xs md:text-sm font-medium text-nairobi-dark dark:text-white hover:underline">
          Home
        </Link>
        <img src="/images/logo/sallys_logo.png" alt="Sally's Logo" className="h-4 md:h-12 w-auto" />
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/test" className="text-xs md:text-sm font-medium text-nairobi-dark dark:text-white hover:underline">
            Test yourself
          </Link>
          <Link to="/about" className="text-xs md:text-sm font-medium text-nairobi-dark dark:text-white hover:underline">
            About
          </Link>
        </div>
      </header>

      <main className="px-4 md:px-8 py-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-nairobi-dark dark:text-white mb-6 text-center">{quiz.topic}</h1>
        
        <div className="w-40 h-40 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg">
          <img src="/images/illustrations/Guten_Tag.png" alt="Quiz" className="w-full h-full object-cover" />
        </div>
        
        <p className="text-lg text-nairobi-dark dark:text-white/90 font-medium italic leading-relaxed mb-8 text-center bg-gray-50 dark:bg-white/10 p-4 rounded-xl">
          "{quiz.context}"
        </p>

        <div className="space-y-8">
          {quiz.dialogue.map((entry, idx) => (
            <div key={idx} className="pb-6">
              <p className="text-lg text-nairobi-dark dark:text-white mb-3">
                <strong className="opacity-70">{entry.speaker}:</strong> {entry.line}
              </p>
              
              {entry.options && (
                <div className="flex flex-wrap gap-3 mt-3">
                  {entry.options.map((option, i) => {
                    const myAnswer = answers[idx];
                    const wasPicked = myAnswer?.picked === option;
                    
                    let styles = "border-2 border-[#335E40] dark:border-white text-[#335E40] dark:text-white bg-transparent";
                    
                    if (wasPicked) {
                      styles = myAnswer.isCorrect 
                        ? "bg-green-500 border-green-500 text-white shadow-md" 
                        : "bg-red-500 border-red-500 text-white shadow-md";
                    } else if (myAnswer) {
                      styles = "opacity-50 border-gray-300 dark:border-white/20 text-gray-400 dark:text-white/40 cursor-not-allowed";
                    }

                    return (
                      <button
                        key={i}
                        disabled={!!myAnswer}
                        onClick={() => handlePick(idx, option, entry.correct)}
                        className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${styles} ${!myAnswer && 'hover:bg-nairobi-dark hover:text-white dark:hover:bg-white dark:hover:text-nairobi-dark'}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {finished && (
          <div className="mt-12 p-8 text-center text-nairobi-dark dark:text-white animate-in fade-in zoom-in">
            <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
            <p className="text-4xl font-black mb-6">{score} / {total}</p>
    
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-xl bg-white dark:bg-nairobi-dark text-nairobi-dark dark:text-white font-bold shadow-lg hover:scale-105 transition-all"
              >
                Back
              </button>
              <button className="px-6 py-3 rounded-xl bg-white dark:bg-nairobi-dark text-nairobi-dark dark:text-white font-bold shadow-lg hover:scale-105 transition-all">
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

