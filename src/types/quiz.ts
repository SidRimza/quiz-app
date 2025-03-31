export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  timeLimit: number;
}

export interface Category {
  id: string;
  name: string;
  questions: Question[];
}

export interface QuizState {
  currentCategory: Category | null;
  currentQuestionIndex: number;
  score: number;
  unansweredQuestions: number;
  isQuizComplete: boolean;
  selectedAnswer: string | null;
  timeRemaining: number;
  userName: string;
  isRulesOpen: boolean;
}

export interface QuizContextType {
  state: QuizState;
  selectCategory: (category: Category) => void;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
} 