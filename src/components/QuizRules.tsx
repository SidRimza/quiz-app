import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    padding: '24px 32px',
    maxWidth: '800px',
    width: '100%',
    margin: '24px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    overflow: 'visible',
  }
}));

const RuleSection = styled(Box)(() => ({
  backgroundColor: '#F9F9F7',
  padding: '16px',
  marginBottom: '16px',
  borderRadius: '4px',
  '&:last-child': {
    marginBottom: 0,
  },
}));

interface QuizRulesProps {
  open: boolean;
  onClose: () => void;
}

const QuizRules: React.FC<QuizRulesProps> = ({ open, onClose }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="quiz-rules-dialog"
    >
      <DialogTitle sx={{ 
        p: 0, 
        mb: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography 
          variant="h5" 
          component="div" 
          sx={{ 
            fontWeight: 600, 
            fontSize: '1.5rem',
            color: '#2D264B'
          }}
        >
          Quiz rules
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: '#000',
            padding: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <RuleSection>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: '#2D264B', 
              fontSize: '1rem' 
            }}
          >
            10-Second Timer
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            <Typography 
              component="li" 
              sx={{ 
                mb: 1, 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              Each question comes with a 10-second timer.
            </Typography>
            <Typography 
              component="li" 
              sx={{ 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              If you don't answer within the time limit, the app will automatically move to the next question.
            </Typography>
          </Box>
        </RuleSection>

        <RuleSection>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: '#2D264B', 
              fontSize: '1rem' 
            }}
          >
            Manual Navigation
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            <Typography 
              component="li" 
              sx={{ 
                mb: 1, 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              You can navigate to the next question manually before the timer expires.
            </Typography>
            <Typography 
              component="li" 
              sx={{ 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              Use the "Next" button to move ahead if you're ready before the timer runs out.
            </Typography>
          </Box>
        </RuleSection>

        <RuleSection>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: '#2D264B', 
              fontSize: '1rem' 
            }}
          >
            Final Score and Performance Message
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
            <Typography 
              component="li" 
              sx={{ 
                mb: 1, 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              After all questions are answered, your final score will be displayed.
            </Typography>
            <Typography 
              component="li" 
              sx={{ 
                mb: 1, 
                fontSize: '0.875rem', 
                color: '#2D264B',
                lineHeight: 1.5,
              }}
            >
              Based on your performance, you will receive a personalized message:
            </Typography>
            <Box component="ul" sx={{ pl: 2.5 }}>
              <Typography 
                component="li" 
                sx={{ 
                  mb: 0.5, 
                  fontSize: '0.875rem', 
                  color: '#2D264B',
                  lineHeight: 1.5,
                }}
              >
                Great job!: If you score <Box component="span" sx={{ fontWeight: 600 }}>above 80%</Box>.
              </Typography>
              <Typography 
                component="li" 
                sx={{ 
                  mb: 0.5, 
                  fontSize: '0.875rem', 
                  color: '#2D264B',
                  lineHeight: 1.5,
                }}
              >
                Well done!: If you score <Box component="span" sx={{ fontWeight: 600 }}>between 60% and 80%</Box>.
              </Typography>
              <Typography 
                component="li" 
                sx={{ 
                  fontSize: '0.875rem', 
                  color: '#2D264B',
                  lineHeight: 1.5,
                }}
              >
                Keep practicing!: If you score <Box component="span" sx={{ fontWeight: 600 }}>below 60%</Box>.
              </Typography>
            </Box>
          </Box>
        </RuleSection>
      </DialogContent>
    </StyledDialog>
  );
};

export default QuizRules; 