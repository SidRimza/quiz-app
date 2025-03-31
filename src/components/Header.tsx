import {
    Box,
    Button,
    styled,
    Typography
} from '@mui/material';
import { useQuiz } from "context/QuizContext";

const Logo = styled(Typography)(() => ({
    fontSize: '1.25rem',

    height: "23px",
    '& .quiz': {
        color: '#E91E63',
        position: "absolute",
        width: "144px",
        left: "108px",
        // top: 'calc(50% - 23px/2 - 0.5px)',
        // background: "#B92B5D",
    },
    '& .mania': {
    fontWeight: 900,
        color: '#E91E63',
    },
}));

export const Header = ({ isExitQuiz }: { isExitQuiz: boolean }) => {

    const { exitQuiz } = useQuiz()
    return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #E0E0E0',
        width: "100%",
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
                    borderRadius: '25px',
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
    </Box>)
}