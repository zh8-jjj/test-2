
export enum ParadigmType {
  Rational = 0,      // 理性派
  Deconstruction = 1, // 解构派
  Pragmatic = 2,     // 务实派
  Inclusion = 3      // 包容派
}

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: ParadigmType;
  }[];
}

export interface PersonaData {
  name: string;
  mentor: string;
  avatar: string;
  quote: string;
  intro: string;
  traits: string[];
  limitations: string[];
  books: string[];
  color: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  scores: number[];
  history: number[][]; // 记录每一题之前的分数快照
  isFinished: boolean;
}
