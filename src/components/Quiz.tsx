import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  LinearProgress,
  Paper,
  styled,
  Grid,
} from '@mui/material';
import { useQuiz } from '../context/QuizContext';
import QuizRules from './QuizRules';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



const OptionPaper = styled(Paper)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    minHeight: '56px',
    padding: '16px 24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid',
    borderRadius: '8px',
    borderColor: selected ? '#E91E63' : '#E0E0E0',
    backgroundColor: selected ? '#FFF5F7' : theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: 'auto',
    minWidth: '200px',
    maxWidth: '100%',
    '&:hover': {
      borderColor: '#E91E63',
      backgroundColor: !selected && '#FFF5F7',
    },
  })
);

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E91E63',
  color: 'white',
  padding: '12px 32px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  minWidth: '120px',
  '&:hover': {
    backgroundColor: '#D81B60',
  },
  '&.Mui-disabled': {
    backgroundColor: '#E7A3B4',
    color: 'white',
  },
}));

const Quiz: React.FC<{ setExitQuizState:  React.Dispatch<React.SetStateAction<boolean>>}> = ({setExitQuizState}) => {
  const { state, selectAnswer, nextQuestion, skipQuestion, setRulesOpen } = useQuiz();

  useEffect(() => {
      setRulesOpen(!state.isRulesOpen);
      return () => {
        setRulesOpen(!state.isRulesOpen);
      };
  }, []);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    setExitQuizState(true);
    if (state.timeRemaining > 0 && !state.selectedAnswer && !state.isRulesOpen) {
      timer = setInterval(() => {
        if (state.timeRemaining === 1) {
          skipQuestion();
        }
      }, 1000);
    }
    return () => {
      setExitQuizState(false);
      clearInterval(timer)
    };
  }, [state.timeRemaining, state.selectedAnswer, skipQuestion, state.isRulesOpen]);

  const formatTime = (seconds: number): string => {
    return `0:${seconds.toString().padStart(2, '0')}`;
  };

  const handleCloseRules = () => {
    setRulesOpen(false);
  };

  if (!state.currentCategory) return null;

  const currentQuestion = state.currentCategory.questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / state.currentCategory.questions.length) * 100;

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#FFFBF9',
      pt: '16px',
    }}>
      <Container maxWidth="md">
        <Box sx={{ 
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          px: 2,
        }}>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography sx={{ color: '#E91E63', fontSize: '1.125rem', fontWeight: 600 }}>
                {state.currentQuestionIndex + 1}/10
              </Typography>
              <Typography sx={{ 
                color: '#2D264B',
                fontSize: '1.125rem',
                fontWeight: 500,
                backgroundColor: '#F5F5F5',
                px: 2,
                py: 0.5,
                borderRadius: '4px',
                minWidth: '48px',
                textAlign: 'center',
              }}>
                {formatTime(state.timeRemaining)}
              </Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ 
                height: 4,
                borderRadius: 2,
                backgroundColor: '#E0E0E0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#E91E63',
                  borderRadius: 2,
                }
              }}
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography sx={{ 
              color: '#2D264B',
              fontSize: '1.125rem',
              fontWeight: 600,
              mb: 3,
            }}>
              {state.currentQuestionIndex + 1}. {currentQuestion.question}
            </Typography>

            <Grid container spacing={2}>
              {currentQuestion.options.map((option, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <OptionPaper
                    onClick={() => !state.isRulesOpen && selectAnswer(option)}
                    selected={state.selectedAnswer === option}
                    elevation={0}
                    sx={{ 
                      cursor: state.isRulesOpen ? 'not-allowed' : 'pointer',
                      opacity: state.isRulesOpen ? 0.7 : 1,
                    }}
                  >
                    {state.selectedAnswer === option ? (
                      <CheckCircleIcon sx={{ color: '#E91E63', fontSize: 20 }} />
                    ) : (
                      <RadioButtonUncheckedIcon sx={{ color: '#E0E0E0', fontSize: 20 }} />
                    )}
                    <Typography sx={{ 
                      fontSize: '0.875rem',
                      color: '#2D264B',
                      fontWeight: 500,
                      lineHeight: 1.5,
                      flex: '1 1 auto',
                    }}>
                      {option}
                    </Typography>
                  </OptionPaper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 6 }}>
            <StyledButton
              onClick={nextQuestion}
              disabled={state.selectedAnswer === null || state.isRulesOpen}
              sx={{
                backgroundColor: state.currentQuestionIndex === state.currentCategory.questions.length - 1 ? '#E7A3B4' : '#E91E63',
              }}
            >
              {state.currentQuestionIndex === state.currentCategory.questions.length - 1 ? 'Finish' : 'Next'}
            </StyledButton>
            <Button
              variant="text"
              onClick={skipQuestion}
              disabled={state.isRulesOpen}
              sx={{
                color: '#2D264B',
                fontSize: '0.875rem',
                textTransform: 'none',
                opacity: 0.7,
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(45, 38, 75, 0.04)',
                },
                '&.Mui-disabled': {
                  color: '#2D264B',
                  opacity: 0.5,
                },
              }}
            >
              Skip this question
            </Button>
          </Box>

          <QuizRules 
            open={state.isRulesOpen}
            onClose={handleCloseRules}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Quiz;