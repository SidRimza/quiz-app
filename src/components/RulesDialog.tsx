import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    padding: theme.spacing(2),
    maxWidth: '500px',
  },
}));

interface RulesDialogProps {
  open: boolean;
  onClose: () => void;
}

const RulesDialog: React.FC<RulesDialogProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle sx={{ p: 0, mb: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Quiz rules</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            10-Second Timer
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            • Each question comes with a 10-second timer.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            • If you don't answer within the time limit, the app will automatically move to the next question.
          </Typography>
        </Box>

        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            Manual Navigation
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            • You can navigate to the next question manually before the timer expires.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            • Use the "Next" button to move ahead if you're ready before the timer runs out.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            Final Score and Performance Message
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            • After all questions are answered, your final score will be displayed.
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            • Based on your performance, you will receive a personalized message:
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ pl: 2 }}>
            - Great job! If you score above 80%
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ pl: 2 }}>
            - Well done! If you score between 60% and 80%
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ pl: 2 }}>
            - Keep practicing! If you score below 60%
          </Typography>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default RulesDialog; 