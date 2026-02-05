
import React, { useState } from 'react';
import { QUESTIONS } from './constants';
import { ParadigmType, QuizState } from './types';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    scores: [0, 0, 0, 0],
    history: [],
    isFinished: false,
  });

  const handleStart = () => setStarted(true);

  const handleAnswer = (type: ParadigmType) => {
    const newScores = [...quizState.scores];
    newScores[type]++;

    if (quizState.currentQuestionIndex < QUESTIONS.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
        scores: newScores,
        history: [...quizState.history, quizState.scores]
      });
    } else {
      setQuizState({
        ...quizState,
        scores: newScores,
        isFinished: true,
      });
    }
  };

  const handleBack = () => {
    if (quizState.currentQuestionIndex > 0) {
      const prevScores = quizState.history[quizState.history.length - 1];
      const newHistory = quizState.history.slice(0, -1);
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
        scores: prevScores,
        history: newHistory
      });
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setQuizState({
      currentQuestionIndex: 0,
      scores: [0, 0, 0, 0],
      history: [],
      isFinished: false,
    });
  };

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-5 bg-white">
        <h1 className="text-4xl md:text-5xl text-[#18181b] font-semibold mb-4 tracking-widest serif">
          探索表达范式的思想锚点
        </h1>
        <h2 className="text-xl md:text-2xl text-[#71717a] font-normal mb-10 tracking-wider serif">
          你的言说方式，与哪位哲学先驱同频？
        </h2>
        <p className="text-sm md:text-base text-[#a1a1aa] leading-relaxed max-w-[600px] mb-12 serif">
          基于经典思想家的表达范式，通过25组情境式思辨题，定位你的思想表达坐标。
        </p>
        <button 
          onClick={handleStart}
          className="bg-[#18181b] text-white border-none py-3 px-10 text-base cursor-pointer transition-all hover:bg-[#3f3f46] tracking-widest serif"
        >
          开启思想溯源
        </button>
        <p className="text-xs text-[#d4d4d8] mt-12 tracking-wider serif">
          @黑房子新沙发BlackHouseNewSofa
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {quizState.isFinished ? (
        <Results scores={quizState.scores} onReset={resetQuiz} />
      ) : (
        <Quiz 
          currentQuestion={QUESTIONS[quizState.currentQuestionIndex]} 
          onAnswer={handleAnswer} 
          onBack={handleBack}
          canBack={quizState.currentQuestionIndex > 0}
          progress={(quizState.currentQuestionIndex / QUESTIONS.length) * 100}
          total={QUESTIONS.length}
          current={quizState.currentQuestionIndex + 1}
        />
      )}
    </div>
  );
};

export default App;
