import { Category } from '../types/quiz';

export const quizData: Category[] = [
  {
    id: 'js_basics',
    name: 'JavaScript Basics',
    questions: [
      {
        id: 'q1',
        question: 'What is the correct syntax for referring to an external script called "script.js"?',
        options: [
          'A. <script name="script.js">',
          'B. <script href="script.js">',
          'C. <script src="script.js">',
          'D. <script file="script.js">'
        ],
        correctAnswer: 'C',
        timeLimit: 10
      },
      {
        id: 'q2',
        question: 'Which company developed JavaScript?',
        options: [
          'A. Microsoft',
          'B. Netscape',
          'C. Google',
          'D. Mozilla'
        ],
        correctAnswer: 'B',
        timeLimit: 10
      },
      {
        id: 'q3',
        question: 'What is the correct way to declare a JavaScript variable?',
        options: [
          'A. var variableName;',
          'B. variable variableName;',
          'C. v variableName;',
          'D. let variableName;'
        ],
        correctAnswer: 'A',
        timeLimit: 10
      }
    ]
  },
  {
    id: 'react_basics',
    name: 'React Basics',
    questions: [
      {
        id: 'q1',
        question: 'What is React?',
        options: [
          'A. A programming language',
          'B. A database',
          'C. A JavaScript library for building user interfaces',
          'D. A web server'
        ],
        correctAnswer: 'C',
        timeLimit: 10
      },
      {
        id: 'q2',
        question: 'Which hook is used to manage state in functional components?',
        options: [
          'A. useState',
          'B. useEffect',
          'C. useContext',
          'D. useReducer'
        ],
        correctAnswer: 'A',
        timeLimit: 10
      },
      {
        id: 'q3',
        question: 'What is JSX?',
        options: [
          'A. A new programming language',
          'B. A syntax extension for JavaScript',
          'C. A database query language',
          'D. A styling language'
        ],
        correctAnswer: 'B',
        timeLimit: 10
      }
    ]
  }
]; 