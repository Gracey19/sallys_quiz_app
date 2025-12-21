import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GutenTag() {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({}); 

  useEffect(() => {
    fetch("/data/GutenTag.json")
      .then(res => res.json())
      .then(data => setQuiz(data))
      .catch(err => console.error("Failed to load quiz:", err));
  }, []);

  if (!quiz) return <p className="text-center text-xl mt-20">Loading…</p>;

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
    <div className="min-h-screen bg-[#F0E2DF] relative">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-5">
        <Link to="/home" className="text-xs md:text-sm font-medium text-[#335E40] hover:underline">
          Home
        </Link>
        <img src="/images/logo/sallys_logo.png" alt="Sally's Logo" className="h-4 md:h-12 w-auto" />
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/test" className="text-xs md:text-sm font-medium text-[#335E40] hover:underline">
            Test yourself
          </Link>
          <Link to="/about" className="text-xs md:text-sm font-medium text-[#335E40] hover:underline">
            About
          </Link>
        </div>
      </header>

      <main className="px-4 md:px-8 py-6">
        <h1 className="text-xl font-bold text-[#335E40] mb-4 text-center">{quiz.topic}</h1>
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
          <img
            src="/images/illustrations/Guten_Tag.png"
            alt="Illustrations"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg text-[#335E40] leading-relaxed mb-6 text-center">{quiz.context}</p>

        <div className="space-y-6">
          {quiz.dialogue.map((entry, index) => (
            <div key={index}>
              <p className="text-lg text-[#335E40]">
                <strong>{entry.speaker}:</strong> {entry.line}
              </p>
              {entry.options && (
                <ul className="list-none pl-0 space-y-2 mt-2">
                  {entry.options.map((opt, i) => {
                    const answer = answers[index];
                    const isSelected = answer?.selected === opt;
                    const isCorrect = answer?.isCorrect;

                    return (
                      <li key={i}>
                        <button
                          onClick={() => handleClick(index, opt, entry.correct)}
                          disabled={!!answer} 
                          className={`px-3 py-1 border border-[#335E40] rounded 
                            ${
                              isSelected
                                ? isCorrect
                                  ? "bg-green-200 text-[#335E40]"
                                  : "bg-red-200 text-[#335E40]"
                                : "bg-white text-[#335E40]"
                            }`}
                        >
                          {opt}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        {allAnswered && (
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-[#335E40] mb-4">
              Your Score: {score} / {totalQuestions}
            </p>
    
           
          <div class="mt-8 justify-center flex space-x-12">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 rounded bg-[#335E40] text-white font-semibold hover:bg-[#264C32] transition-colors"
            >
              Back
            </button>

            <button
              className="px-6 py-2 rounded bg-[#335E40] text-white font-semibold hover:bg-[#264C32] transition-colors"
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

