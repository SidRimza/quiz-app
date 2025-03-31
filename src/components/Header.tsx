import {
    Avatar,
    Box,
    Button,
    styled,
    Typography
} from '@mui/material';
import { useQuiz } from "context/QuizContext";

const UserAvatar = styled(Avatar)(({ theme }) => ({
    width: 32,
    height: 32,
    backgroundColor: theme.palette.primary.main,
    fontSize: '1rem',
  }));

const Logo = styled(Typography)(() => ({
    fontSize: '1.25rem',

    height: "23px",
    '& .quiz': {
        color: '#E91E63',
        position: "absolute",
        width: "144px",
        left: "108px",
        fontFamily: "Outfit",
        fontWeight: 250,
        '@media (max-width: 600px)': {
            left: "20px"
        }
    },
    '& .mania': {
        color: '#E91E63',
        fontFamily: "Outfit",
        fontWeight: 700,
    },
}));

export const Header = ({ isExitQuiz, userName }: { isExitQuiz: boolean, userName: any }) => {

    const { exitQuiz } = useQuiz()
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #E0E0E0',
            width: "95%",
            height: 80,
        }}>
            <Logo>
                <span className='quiz'>QUIZ<b className="mania">Mania</b></span>
            </Logo>
            {isExitQuiz &&
                <Button
                    variant="outlined"
                    onClick={exitQuiz}
                    sx={{
                        borderColor: '#E91E63',
                        color: '#E91E63',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        px: 3,
                        py: 1,
                        '&:hover': {
                            borderColor: '#D81B60',
                            backgroundColor: 'rgba(233, 30, 99, 0.04)',
                        },
                    }}
                >
                    Exit Quiz
                </Button>
            }
           {userName && !isExitQuiz && <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <UserAvatar>{userName.charAt(0).toUpperCase()}</UserAvatar>
            </Box>}
        </Box>)
}