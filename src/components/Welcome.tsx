import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  styled,
  TypographyProps,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useQuiz } from '../context/QuizContext';
import { quizData } from '../data/questions';
import QuizRules from './QuizRules';

const Logo = styled(Typography)<TypographyProps>(() => ({
  marginBottom: '1rem',
  fontFamily: "Outfit, sens-serif",
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: "100%",
  letterSpacing: "0%",
  '& .quiz': {
    fontFamily: "Outfit",
    fontWeight: 250,
    fontSize: "64px",
    lineHeight: "100%",
    letterSpacing: "0%",
    color: '#333',
  },
  '& .mania': {
    color: '#E91E63',
    fontFamily: "Outfit",
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "100%",
    letterSpacing: "0%",
  },
  '@media (max-width: 600px)': {
    fontSize: "26px",
    '& .quiz, & .mania': {
      fontSize: "26px",
    }
  }
}));


const StyleTypography = styled(Typography)(() => ({
  fontFamily: 'Outfit',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: "100%",
  letterSpacing: "0%",
  color: "#B92B5D",
  '&:hover': {
    cursor: 'pointer',
  },
}))

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#E91E63',
  color: 'white',
  padding: '12px 48px',
  borderRadius: '25px',
  textTransform: 'none',
  fontSize: '16px',
  marginTop: '2rem',
  '&:hover': {
    backgroundColor: '#D81B60',
  },
  '&.Mui-disabled': {
    backgroundColor: '#E7A3B4',
    color: 'white',
  },
}));

const StyledRadio = styled(Radio)(() => ({
  '&.Mui-checked': {
    color: '#E91E63',
  },
  '& .MuiSvgIcon-root': {
    display: 'none',
  },
}));

const TopicBox = styled(Box)<{ selected?: boolean }>(({ selected }) => ({
  border: '1px solid',
  borderColor: selected ? '#E91E63' : '#E0E0E0',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: selected ? '#FFF5F7' : 'transparent',
  '&:hover': {
    borderColor: '#E91E63',
  },
}));
interface WelcomeProps {
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const Welcome: React.FC<WelcomeProps> = ({setUser}) => {
  const [name, setName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const { state, selectCategory, setUserName, setRulesOpen } = useQuiz();

  const handleStartQuiz = () => {
    if (name && selectedTopic) {
      setUserName(name);
      const category = quizData.categories.find(cat => cat.name === selectedTopic);
      if (category) {
        selectCategory(category);
        setUser(name)
      }
    }
  };

  const handleTopicSelect = (topicName: string) => {
    setSelectedTopic(topicName);
  };

  const handleCloseRules = () => {
    setRulesOpen(false);
  };
  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{
         width: '100%',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2.5
      }}>
        <Logo>
          Welcome to <span className="quiz">QUIZ</span><span className="mania">Mania</span>
        </Logo>

        <Box sx={{
          background: "#D9D9D94D",
          borderRadius: "8px",
          paddingTop: "12px",
          paddingRight: "16px",
          paddingBottom: "12px",
          paddingLeft: "16px",
          gap: "8px"

        }}>
          <Typography variant="body1" color="textSecondary" sx={{ fontSize: '20px', mb: 1 }}>
            Please read all the rules about this quiz before you start.
          </Typography>
          <StyleTypography className='quiz-rules'
            onClick={() => {
              setRulesOpen(true)
            }}>
            Quiz rules
          </StyleTypography>
        </Box>

        <Box sx={{ width: '100%', mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1.5, textAlign: 'left', color: '#333', fontSize: '1rem', fontWeight: 500 }}>
            Full name
          </Typography>
          <TextField
            fullWidth
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                height: '48px',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#E91E63',
                },
              }
            }}
          />
        </Box>

        <Box sx={{ width: '100%', mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1.5, textAlign: 'left', color: '#333', fontSize: '1rem', fontWeight: 500 }}>
            Please select topic to continue
          </Typography>
          <RadioGroup value={selectedTopic} onChange={(e) => handleTopicSelect(e.target.value)}>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(12, 1fr)',
                md: 'repeat(12, 1fr)'
              },
              gap: { xs: 1.5, md: 2.5 }
            }}>
              {quizData.categories.map((category) => (
                <TopicBox
                  key={category.id}
                  selected={selectedTopic === category.name}
                  onClick={() => handleTopicSelect(category.name)}
                  sx={{ 
                    height: '56px',
                    gridColumn: {
                      xs: 'span 12',
                      md: 'span 6'
                    }
                  }}
                >
                  <Box sx={{ width: 24, display: 'flex', alignItems: 'center' }}>
                    {selectedTopic === category.name ? (
                      <CheckCircleIcon sx={{ color: '#E91E63', fontSize: '24px' }} />
                    ) : (
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          border: '2px solid #E0E0E0',
                          borderRadius: '50%'
                        }}
                      />
                    )}
                  </Box>
                  <FormControlLabel
                    value={category.name}
                    control={<StyledRadio />}
                    label={category.name}
                    sx={{
                      m: 0,
                      flexGrow: 1,
                      '& .MuiFormControlLabel-label': {
                        color: '#333',
                        fontSize: '1rem',
                        fontWeight: 500
                      }
                    }}
                  />
                </TopicBox>
              ))}
            </Box>
          </RadioGroup>
        </Box>

        <StyledButton
          onClick={handleStartQuiz}
          disabled={!name || !selectedTopic}
        >
          Start Quiz
        </StyledButton>

        <QuizRules
          open={state.isRulesOpen}
          onClose={handleCloseRules}
        />
      </Box>
    </Container>
  );
};

export default Welcome;