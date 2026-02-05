
import React from 'react';
import { Question, ParadigmType } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface QuizProps {
  currentQuestion: Question;
  onAnswer: (type: ParadigmType) => void;
  onBack: () => void;
  canBack: boolean;
  progress: number;
  total: number;
  current: number;
}

const Quiz: React.FC<QuizProps> = ({ currentQuestion, onAnswer, onBack, canBack, progress, total, current }) => {
  return (
    <div className="max-w-2xl mx-auto min-h-screen flex flex-col items-start justify-center p-6 md:p-12 bg-white">
      {/* Case Header */}
      <div className="w-full mb-12 flex justify-between items-baseline border-b border-zinc-100 pb-4">
        <span className="text-zinc-400 font-mono text-sm tracking-tighter uppercase">CASE {current.toString().padStart(2, '0')}</span>
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-zinc-300 font-mono tracking-widest uppercase">{Math.round(progress)}% PROGRESS</span>
            <div className="w-12 h-0.5 bg-zinc-50">
                <motion.div className="h-full bg-zinc-400" animate={{ width: `${progress}%` }} />
            </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-12 serif leading-relaxed text-zinc-900">
            {currentQuestion.text}
          </h2>
          
          <div className="flex flex-col gap-5 w-full">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => onAnswer(option.type)}
                className="w-full p-5 text-left border border-zinc-100 bg-white hover:border-zinc-900 hover:shadow-sm transition-all group flex items-start gap-5"
              >
                <span className="text-zinc-300 group-hover:text-zinc-900 font-mono text-sm pt-0.5 transition-colors">
                  {String.fromCharCode(65 + idx)}.
                </span>
                <span className="text-base md:text-lg text-zinc-600 group-hover:text-zinc-900 transition-colors serif">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="w-full mt-20 flex justify-start">
        {canBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-300 hover:text-zinc-900 transition-colors text-xs serif uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} /> 返回上一题
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
