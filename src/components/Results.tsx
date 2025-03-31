import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  styled,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const ScoreCircle = styled(Box)(({ theme }) => ({
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '24px auto',
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  backgroundColor: theme.palette.primary.main,
  fontSize: '1rem',
}));

interface ResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unansweredQuestions: number;
  userName: string;
  onRetakeQuiz: () => void;
}

const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  unansweredQuestions,
  userName,
  onRetakeQuiz,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isGoodScore = percentage >= 60;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <UserAvatar>{userName.charAt(0).toUpperCase()}</UserAvatar>
        </Box>

        {isGoodScore ? (
          <CheckCircleIcon
            color="success"
            sx={{ fontSize: 64, mb: 2 }}
          />
        ) : (
          <SentimentDissatisfiedIcon
            color="error"
            sx={{ fontSize: 64, mb: 2 }}
          />
        )}

        <Typography variant="h4" component="h1" gutterBottom sx={{ letterSpacing: 4 }}>
          {isGoodScore ? 'CONGRATULATION' : 'KEEP PRACTICING!'}
        </Typography>

        <Typography variant="body1" color="textSecondary" gutterBottom>
          {isGoodScore
            ? 'You successfully completed the Quiz and holds'
            : 'You successfully completed the Quiz but you need to'}
        </Typography>

        <ScoreCircle>
          <Typography
            variant="h4"
            component="div"
            color={isGoodScore ? 'success.main' : 'error.main'}
          >
            {percentage}%
          </Typography>
        </ScoreCircle>

        {isGoodScore && (
          <Typography variant="h5" gutterBottom color="success.main">
            Great job!
          </Typography>
        )}

        <Box
          sx={{
            mt: 4,
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="body1" gutterBottom>
            Out of {totalQuestions} questions
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              mt: 2,
              color: 'text.secondary',
            }}
          >
            <Typography variant="body2">
              {correctAnswers} Correct
            </Typography>
            <Typography variant="body2">
              {incorrectAnswers} Incorrect
            </Typography>
            <Typography variant="body2">
              {unansweredQuestions} Not answered
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          onClick={onRetakeQuiz}
          sx={{ mt: 4 }}
        >
          Retake Quiz
        </Button>
      </Box>
    </Container>
  );
};

export default Results; 