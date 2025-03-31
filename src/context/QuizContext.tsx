import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { QuizState, Category } from '../types/quiz';

interface QuizContextType {
  state: QuizState;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
  exitQuiz: () => void;
  skipQuestion: () => void;
  resetQuiz: () => void;
  selectCategory: (category: Category) => void;
  setUserName: (name: string) => void;
  setRulesOpen: (isOpen: boolean) => void;
}

const initialState: QuizState = {
  currentCategory: null,
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  isQuizComplete: false,
  unansweredQuestions: 0,
  timeRemaining: 10,
  userName: '',
  isRulesOpen: false,
};

type QuizAction =
  | { type: 'SELECT_CATEGORY'; payload: Category }
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESET_QUIZ' }
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'UPDATE_TIME' }
  | { type: 'SKIP_QUESTION' }
  | { type: 'SET_RULES_OPEN'; payload: boolean };

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...initialState,
        currentCategory: action.payload,
        userName: state.userName,
      };
    case 'SELECT_ANSWER':
      const currentQuestion = state.currentCategory?.questions[state.currentQuestionIndex];
      const isCorrect = currentQuestion?.correctAnswer === action.payload;
      return {
        ...state,
        selectedAnswer: action.payload,
        score: isCorrect ? state.score + 1 : state.score,
      };
    case 'NEXT_QUESTION':
      const isLastQuestion = state.currentCategory 
        ? state.currentQuestionIndex === state.currentCategory.questions.length - 1
        : false;
      return {
        ...state,
        currentQuestionIndex: isLastQuestion ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
        selectedAnswer: null,
        timeRemaining: 10,
        isQuizComplete: isLastQuestion,
      };
    case 'SKIP_QUESTION':
      const isLast = state.currentCategory 
        ? state.currentQuestionIndex === state.currentCategory.questions.length - 1
        : false;
      return {
        ...state,
        currentQuestionIndex: isLast ? state.currentQuestionIndex : state.currentQuestionIndex + 1,
        selectedAnswer: null,
        timeRemaining: 10,
        unansweredQuestions: state.unansweredQuestions + 1,
        isQuizComplete: isLast,
      };
    case 'RESET_QUIZ':
      return {
        ...initialState,
        userName: state.userName,
        currentCategory: null,
        isQuizComplete: false,
        score: 0,
        currentQuestionIndex: 0,
        selectedAnswer: null,
        unansweredQuestions: 0,
        timeRemaining: 10
      };
    case 'SET_USERNAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        timeRemaining: state.timeRemaining > 0 ? state.timeRemaining - 1 : 0,
      };
    case 'SET_RULES_OPEN':
      return {
        ...state,
        isRulesOpen: action.payload,
      };
    default:
      return state;
  }
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (state.currentCategory && !state.selectedAnswer && state.timeRemaining > 0 && !state.isQuizComplete && !state.isRulesOpen) {
      timer = setInterval(() => {
        dispatch({ type: 'UPDATE_TIME' });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state.currentCategory, state.selectedAnswer, state.timeRemaining, state.isQuizComplete, state.isRulesOpen]);

  useEffect(() => {
    if (state.timeRemaining === 0 && !state.selectedAnswer) {
      dispatch({ type: 'SKIP_QUESTION' });
    }
  }, [state.timeRemaining, state.selectedAnswer]);

  const selectCategory = (category: Category) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
  };

  const selectAnswer = (answer: string) => {
    dispatch({ type: 'SELECT_ANSWER', payload: answer });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const skipQuestion = () => {
    selectAnswer("");
    dispatch({ type: 'SKIP_QUESTION' });
  };

  const exitQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  const setUserName = (name: string) => {
    dispatch({ type: 'SET_USERNAME', payload: name });
  };

  const setRulesOpen = (isOpen: boolean) => {
    dispatch({ type: 'SET_RULES_OPEN', payload: isOpen });
  };

  return (
    <QuizContext.Provider value={{ 
      state, 
      selectAnswer, 
      nextQuestion, 
      exitQuiz, 
      skipQuestion,
      resetQuiz,
      selectCategory,
      setUserName,
      setRulesOpen
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}; 