import React from 'react';
import { Box, Button, Container, Typography, Card, CardContent } from '@mui/material';
import { useQuiz } from '../context/QuizContext';
import { quizData } from '../data/quizData';

const CategorySelection: React.FC = () => {
  const { selectCategory } = useQuiz();

  return (
    <Container maxWidth="md" className="category-selection">
      <Box className="header">
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          QuizMania
        </Typography>
        <Typography variant="h5" component="h2" align="center" color="textSecondary" gutterBottom>
          Select a Category
        </Typography>
      </Box>

      <Box className="category-grid">
        {quizData.map((category) => (
          <Card key={category.id} className="category-card">
            <CardContent className="card-content">
              <Typography variant="h5" component="h3" gutterBottom>
                {category.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {category.questions.length} questions
              </Typography>
            </CardContent>
            <Box className="button-container">
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