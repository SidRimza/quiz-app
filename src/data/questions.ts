export const quizData = {
  categories: [
    {
      id: "javascript_basic",
      name: "Javascript Basic",
      questions: [
        {
          id: "js_q1",
          question: "Which method can be used to round a number to the nearest integer in JavaScript?",
          options: [
            "This method rounds a number up to the nearest integer, regardless of its decimal part.",
            "This method rounds a number down to the nearest integer, ignoring the decimal part.",
            "This method rounds a number to the nearest integer based on its decimal value.",
            "This method generates a random number between 0 and 1, without rounding."
          ],
          correctAnswer: "This method rounds a number to the nearest integer based on its decimal value.",
          timeLimit: 10
        },
        {
          id: "js_q2",
          question: "Which company developed JavaScript?",
          options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Mozilla"
          ],
          correctAnswer: "Netscape",
          timeLimit: 10
        },
        {
          id: "js_q3",
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = {red, green, blue}"
          ],
          correctAnswer: "var colors = ['red', 'green', 'blue']",
          timeLimit: 10
        },
        {
          id: "js_q4",
          question: "How do you write 'Hello World' in an alert box?",
          options: [
            "msgBox('Hello World')",
            "alertBox('Hello World')",
            "msg('Hello World')",
            "alert('Hello World')"
          ],
          correctAnswer: "alert('Hello World')",
          timeLimit: 10
        },
        {
          id: "js_q5",
          question: "How do you create a function in JavaScript?",
          options: [
            "function = myFunction()",
            "function:myFunction()",
            "function myFunction()",
            "create myFunction()"
          ],
          correctAnswer: "function myFunction()",
          timeLimit: 10
        },
        {
          id: "js_q6",
          question: "How do you call a function named 'myFunction'?",
          options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction()",
            "execute myFunction"
          ],
          correctAnswer: "myFunction()",
          timeLimit: 10
        },
        {
          id: "js_q7",
          question: "What is the correct way to write a JavaScript object?",
          options: [
            "var person = Object(name:'John', age:50)",
            "var person = {name:'John', age:50}",
            "var person = (name:'John', age:50)",
            "var person = [name:'John', age:50]"
          ],
          correctAnswer: "var person = {name:'John', age:50}",
          timeLimit: 10
        },
        {
          id: "js_q8",
          question: "How do you declare a JavaScript variable?",
          options: [
            "v carName;",
            "variable carName;",
            "var carName;",
            "declare carName;"
          ],
          correctAnswer: "var carName;",
          timeLimit: 10
        },
        {
          id: "js_q9",
          question: "Which operator is used to assign a value to a variable?",
          options: [
            "*",
            "-",
            "x",
            "="
          ],
          correctAnswer: "=",
          timeLimit: 10
        },
        {
          id: "js_q10",
          question: "What will the following code return: Boolean(10 > 9)",
          options: [
            "NaN",
            "false",
            "true",
            "undefined"
          ],
          correctAnswer: "true",
          timeLimit: 10
        }
      ]
    },
    {
      id: "angular_basic",
      name: "Angular Basic",
      questions: [
        {
          id: "ng_q1",
          question: "What decorator is used to define a component in Angular?",
          options: [
            "@NgComponent",
            "@Component",
            "@CreateComponent",
            "@View"
          ],
          correctAnswer: "@Component",
          timeLimit: 10
        },
        {
          id: "ng_q2",
          question: "Which of the following is used for dependency injection in Angular?",
          options: [
            "constructor",
            "providers",
            "inject",
            "All of the above"
          ],
          correctAnswer: "All of the above",
          timeLimit: 10
        },
        {
          id: "ng_q3",
          question: "What is the purpose of ngOnInit?",
          options: [
            "To initialize the component",
            "To destroy the component",
            "To detect changes",
            "To handle errors"
          ],
          correctAnswer: "To initialize the component",
          timeLimit: 10
        },
        {
          id: "ng_q4",
          question: "Which directive is used for two-way data binding in Angular?",
          options: [
            "[(ngModel)]",
            "[ngModel]",
            "(ngModel)",
            "{{ngModel}}"
          ],
          correctAnswer: "[(ngModel)]",
          timeLimit: 10
        },
        {
          id: "ng_q5",
          question: "What is the purpose of Angular CLI?",
          options: [
            "To create components",
            "To build the application",
            "To run tests",
            "All of the above"
          ],
          correctAnswer: "All of the above",
          timeLimit: 10
        },
        {
          id: "ng_q6",
          question: "Which file contains the root component of an Angular application?",
          options: [
            "main.ts",
            "index.html",
            "app.component.ts",
            "app.module.ts"
          ],
          correctAnswer: "app.component.ts",
          timeLimit: 10
        },
        {
          id: "ng_q7",
          question: "What is the purpose of *ngFor directive?",
          options: [
            "To create a loop",
            "To handle events",
            "To show/hide elements",
            "To handle forms"
          ],
          correctAnswer: "To create a loop",
          timeLimit: 10
        },
        {
          id: "ng_q8",
          question: "Which service is used for making HTTP requests in Angular?",
          options: [
            "HttpClient",
            "Http",
            "Axios",
            "Fetch"
          ],
          correctAnswer: "HttpClient",
          timeLimit: 10
        },
        {
          id: "ng_q9",
          question: "What is the purpose of Angular pipes?",
          options: [
            "To transform data",
            "To handle routing",
            "To manage state",
            "To handle events"
          ],
          correctAnswer: "To transform data",
          timeLimit: 10
        },
        {
          id: "ng_q10",
          question: "Which file is used to configure routes in Angular?",
          options: [
            "routes.ts",
            "app-routing.module.ts",
            "routing.ts",
            "app.routes.ts"
          ],
          correctAnswer: "app-routing.module.ts",
          timeLimit: 10
        }
      ]
    },
    {
      id: "react_advance",
      name: "React.js Advance",
      questions: [
        {
          id: "react_q1",
          question: "What is the purpose of useCallback hook?",
          options: [
            "To cache function definitions",
            "To cache values",
            "To handle side effects",
            "To manage state"
          ],
          correctAnswer: "To cache function definitions",
          timeLimit: 10
        },
        {
          id: "react_q2",
          question: "What is the purpose of useMemo hook?",
          options: [
            "To memoize values",
            "To handle side effects",
            "To manage refs",
            "To handle context"
          ],
          correctAnswer: "To memoize values",
          timeLimit: 10
        },
        {
          id: "react_q3",
          question: "What is React.memo used for?",
          options: [
            "To memoize components",
            "To memoize values",
            "To handle effects",
            "To manage state"
          ],
          correctAnswer: "To memoize components",
          timeLimit: 10
        },
        {
          id: "react_q4",
          question: "What is the purpose of useRef hook?",
          options: [
            "To reference DOM elements",
            "To handle side effects",
            "To manage state",
            "To handle context"
          ],
          correctAnswer: "To reference DOM elements",
          timeLimit: 10
        },
        {
          id: "react_q5",
          question: "What is React Suspense used for?",
          options: [
            "Error handling",
            "Code splitting",
            "State management",
            "Data fetching"
          ],
          correctAnswer: "Code splitting",
          timeLimit: 10
        },
        {
          id: "react_q6",
          question: "What is the purpose of React.lazy?",
          options: [
            "Lazy loading components",
            "Lazy evaluation",
            "Lazy state updates",
            "Lazy effects"
          ],
          correctAnswer: "Lazy loading components",
          timeLimit: 10
        },
        {
          id: "react_q7",
          question: "What is the purpose of useReducer hook?",
          options: [
            "Complex state management",
            "Side effects",
            "Context management",
            "Ref management"
          ],
          correctAnswer: "Complex state management",
          timeLimit: 10
        },
        {
          id: "react_q8",
          question: "What is React Portal used for?",
          options: [
            "Rendering outside DOM hierarchy",
            "State management",
            "Code splitting",
            "Error handling"
          ],
          correctAnswer: "Rendering outside DOM hierarchy",
          timeLimit: 10
        },
        {
          id: "react_q9",
          question: "What is the purpose of useLayoutEffect?",
          options: [
            "Synchronous side effects",
            "Asynchronous side effects",
            "State management",
            "Context management"
          ],
          correctAnswer: "Synchronous side effects",
          timeLimit: 10
        },
        {
          id: "react_q10",
          question: "What is the purpose of React.forwardRef?",
          options: [
            "Forward refs to child components",
            "Forward props",
            "Forward context",
            "Forward state"
          ],
          correctAnswer: "Forward refs to child components",
          timeLimit: 10
        }
      ]
    },
    {
      id: "flutter",
      name: "Flutter",
      questions: [
        {
          id: "flutter_q1",
          question: "What widget would you use to create a repeating list of elements?",
          options: [
            "Container",
            "Column",
            "ListView",
            "Stack"
          ],
          correctAnswer: "ListView",
          timeLimit: 10
        },
        {
          id: "flutter_q2",
          question: "What is the main building block of Flutter UI?",
          options: [
            "Components",
            "Elements",
            "Widgets",
            "Blocks"
          ],
          correctAnswer: "Widgets",
          timeLimit: 10
        },
        {
          id: "flutter_q3",
          question: "Which widget is used for handling gestures?",
          options: [
            "GestureDetector",
            "TouchHandler",
            "EventListener",
            "InputDetector"
          ],
          correctAnswer: "GestureDetector",
          timeLimit: 10
        },
        {
          id: "flutter_q4",
          question: "What is the purpose of setState?",
          options: [
            "Update UI",
            "Handle events",
            "Manage routes",
            "Handle animations"
          ],
          correctAnswer: "Update UI",
          timeLimit: 10
        },
        {
          id: "flutter_q5",
          question: "Which widget is used for creating a scrollable list of widgets?",
          options: [
            "SingleChildScrollView",
            "ScrollView",
            "Scrollable",
            "ListScroll"
          ],
          correctAnswer: "SingleChildScrollView",
          timeLimit: 10
        },
        {
          id: "flutter_q6",
          question: "What is the purpose of pubspec.yaml?",
          options: [
            "Manage dependencies",
            "Handle routing",
            "Store data",
            "Configure widgets"
          ],
          correctAnswer: "Manage dependencies",
          timeLimit: 10
        },
        {
          id: "flutter_q7",
          question: "Which widget is used for creating a button in Flutter?",
          options: [
            "ElevatedButton",
            "Button",
            "PressableButton",
            "TouchButton"
          ],
          correctAnswer: "ElevatedButton",
          timeLimit: 10
        },
        {
          id: "flutter_q8",
          question: "What is the purpose of StreamBuilder?",
          options: [
            "Build UI based on stream",
            "Handle animations",
            "Manage state",
            "Handle routing"
          ],
          correctAnswer: "Build UI based on stream",
          timeLimit: 10
        },
        {
          id: "flutter_q9",
          question: "Which widget is used for creating a card-like surface?",
          options: [
            "Card",
            "Surface",
            "Panel",
            "Container"
          ],
          correctAnswer: "Card",
          timeLimit: 10
        },
        {
          id: "flutter_q10",
          question: "What is the purpose of MediaQuery?",
          options: [
            "Get device information",
            "Handle media files",
            "Play videos",
            "Handle images"
          ],
          correctAnswer: "Get device information",
          timeLimit: 10
        }
      ]
    }
  ]
}; 