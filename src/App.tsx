import React, { useState } from 'react';
import { QuizProvider } from './context/QuizContext';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { useQuiz } from './context/QuizContext';
import { Header } from 'components/Header';

interface AppContentProps {
  exitQuizState?: boolean;
  setExitQuizState:  React.Dispatch<React.SetStateAction<boolean>>;
}
const App: React.FC = () => {
  const [exitQuizState, setExitQuizState] = useState<boolean>(false);

  return (
    <QuizProvider>
      <Header isExitQuiz={exitQuizState} />
      <AppContent setExitQuizState={setExitQuizState} />
    </QuizProvider>
  );
};

const AppContent: React.FC<AppContentProps> = ({setExitQuizState}) => {
  const { state, resetQuiz } = useQuiz();

  // Show Welcome screen if no username or no category is selected
  if (!state.userName || !state.currentCategory) {
    return <Welcome />;
  }

  // Show Results screen if quiz is complete
  if (state.isQuizComplete) {
    const totalQuestions = state.currentCategory.questions.length;
    const incorrectAnswers = totalQuestions - state.score - state.unansweredQuestions;
    return (
      <Results
        score={state.score}
        totalQuestions={totalQuestions}
        correctAnswers={state.score}
        incorrectAnswers={incorrectAnswers}
        unansweredQuestions={state.unansweredQuestions}
        userName={state.userName}
        onRetakeQuiz={resetQuiz}
      />
    );
  }

  // Show Quiz screen
  return <Quiz setExitQuizState={setExitQuizState} />;
};

export default App;
