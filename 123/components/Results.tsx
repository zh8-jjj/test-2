
import React from 'react';
import { PERSONAS } from '../constants';
import { ParadigmType } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Share2, Book, AlertTriangle, User, Quote, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsProps {
  scores: number[];
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ scores, onReset }) => {
  const sortedScores = scores
    .map((score, index) => ({ score, index }))
    .sort((a, b) => b.score - a.score);

  const primaryIndex = sortedScores[0].index as ParadigmType;
  const persona = PERSONAS[primaryIndex];

  const chartData = [
    { subject: '理性规范', A: scores[0] },
    { subject: '权力解构', A: scores[1] },
    { subject: '现实落地', A: scores[2] },
    { subject: '差异包容', A: scores[3] },
  ];

  // Maillard Blue palette
  const navyColor = "#0f172a";
  const amberColor = "#92400e";
  const subNavy = "#475569";

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-14 pb-40 bg-white min-h-screen text-slate-900">
      {/* Header with clear hierarchy */}
      <header className="text-center mb-20 border-b border-slate-100 pb-10">
        <div className="text-[10px] text-amber-700/60 font-mono tracking-[0.5em] uppercase mb-4">Paradigm Identification Report</div>
        <h1 className="text-2xl md:text-3xl font-bold serif mb-3 text-slate-900 tracking-[0.2em]">思想范式评估报告</h1>
        <p className="text-slate-400 serif text-xs tracking-widest italic">言语在虚空中锚定真实</p>
      </header>

      {/* Main Mentor Portrait Section */}
      <div className="flex flex-col items-center mb-24">
          <div className="relative mb-10 group">
              <div className="absolute -inset-4 border border-slate-100 z-0"></div>
              <img 
                  src={persona.avatar} 
                  alt={persona.mentor} 
                  className="w-56 h-72 md:w-64 md:h-80 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover rounded-none border-[1px] border-slate-200 shadow-2xl relative z-10" 
              />
              <div className="absolute -bottom-5 -right-5 bg-[#0f172a] text-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] z-20 serif shadow-xl">
                  {persona.name}
              </div>
          </div>
          <div className="text-center">
              <div className="text-[11px] text-amber-800/70 font-mono tracking-widest mb-2 uppercase">Archetype Mentor</div>
              <h2 className="text-4xl font-bold serif mb-3 text-slate-900 tracking-tight">{persona.mentor}</h2>
          </div>
      </div>

      {/* Quote Block with Amber accent */}
      <div className="bg-slate-50/50 border-y border-slate-100 p-12 mb-24 text-center relative">
        <Quote className="absolute top-4 left-4 text-amber-900/5" size={80} />
        <p className="text-xl md:text-2xl leading-relaxed serif italic text-slate-700 relative z-10 font-medium">
            “{persona.quote}”
        </p>
      </div>

      {/* Radar Chart in Maillard Blue colors */}
      <div className="mb-32">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-8 bg-slate-100"></div>
            <h3 className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase serif">思维维度映射</h3>
            <div className="h-[1px] w-8 bg-slate-100"></div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#f1f5f9" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: subNavy, fontSize: 11, fontWeight: 700 }} />
                <PolarRadiusAxis angle={30} domain={[0, 15]} tick={false} axisLine={false} />
                <Radar
                name="Mindset"
                dataKey="A"
                stroke={persona.color}
                fill={persona.color}
                fillOpacity={0.15}
                />
            </RadarChart>
            </ResponsiveContainer>
          </div>
      </div>

      {/* Vertical Content Sections */}
      <div className="space-y-36">
        {/* 1. 特质画像 */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <User size={24} className="text-[#0f172a]" />
            <h3 className="text-2xl font-bold serif text-[#0f172a] tracking-[0.2em] border-b-2 border-[#0f172a] pb-1">特质画像</h3>
          </div>
          <p className="text-slate-600 leading-[2.4] text-lg mb-12 serif">{persona.intro}</p>
          <div className="grid grid-cols-1 gap-4">
            {persona.traits.map((trait, i) => (
              <div key={i} className="p-6 bg-white border border-slate-100 flex items-center gap-4 hover:border-amber-900/20 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-900/40 group-hover:bg-amber-900 transition-colors"></span>
                <span className="text-slate-800 font-medium serif text-base leading-relaxed">{trait}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 沟通盲点 */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <AlertTriangle size={24} className="text-[#0f172a]" />
            <h3 className="text-2xl font-bold serif text-[#0f172a] tracking-[0.2em] border-b-2 border-[#0f172a] pb-1">沟通盲点</h3>
          </div>
          <div className="space-y-12">
            {persona.limitations.map((lim, i) => (
              <div key={i} className="group flex items-start gap-8 border-l border-slate-100 hover:border-amber-900 transition-all pl-8">
                <span className="text-slate-100 font-black font-mono text-5xl group-hover:text-amber-900/10 transition-colors">0{i+1}</span>
                <span className="text-base md:text-lg serif text-slate-500 pt-4 leading-relaxed group-hover:text-slate-700">{lim}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 进阶书单 */}
        <section className="pb-20">
          <div className="flex items-center gap-4 mb-12">
            <Book size={24} className="text-[#0f172a]" />
            <h3 className="text-2xl font-bold serif text-[#0f172a] tracking-[0.2em] border-b-2 border-[#0f172a] pb-1">进阶书单</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {persona.books.map((book, i) => (
              <div key={i} className="group border border-slate-100 p-8 flex justify-between items-center bg-white hover:bg-[#0f172a] hover:text-white transition-all duration-500 cursor-pointer">
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-500 mb-2 font-mono tracking-widest uppercase">Recommend {i+1}</span>
                    <span className="text-lg font-bold serif tracking-wider uppercase">{book}</span>
                </div>
                <ExternalLink size={16} className="opacity-10 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fixed Footer Actions in Maillard palette */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 p-6 z-50">
          <div className="max-w-2xl mx-auto flex gap-5">
            <button 
              onClick={onReset}
              className="flex-1 bg-white border border-slate-900 text-slate-900 py-4 font-bold transition-all hover:bg-slate-50 serif tracking-[0.3em] text-xs uppercase"
            >
              重新溯源
            </button>
            <button 
              className="flex-1 bg-[#0f172a] text-white py-4 font-bold transition-all hover:bg-black hover:shadow-xl serif tracking-[0.3em] text-xs uppercase flex items-center justify-center gap-2"
              onClick={() => window.print()}
            >
              <Share2 size={16} /> 保存报告
            </button>
          </div>
      </div>
    </div>
  );
};

export default Results;
