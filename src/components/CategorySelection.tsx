import React from 'react';
import { Box, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { useQuiz } from '../context/QuizContext';
import { quizData } from '../data/quizData';

const CategorySelection: React.FC = () => {
  const { selectCategory } = useQuiz();

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Quiz App
        </Typography>
        <Typography variant="h5" component="h2" align="center" color="textSecondary" gutterBottom>
          Select a Category
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
        }}
      >
        {quizData.map((category) => (
          <Card
            key={category.id}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" component="h3" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {category.questions.length} questions
              </Typography>
            </CardContent>
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => selectCategory(category)}
              >
                Start Quiz
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default CategorySelection; 