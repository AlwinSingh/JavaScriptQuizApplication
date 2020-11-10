// == Quiz Start Storage [Name + Category] == \\
var input = require('readline-sync');
var name = input.question("------------------- Welcome to Alwin's Quiz Application  ------------------- \n\nPlease enter your name: "); // User's name question that is used through the quiz

var cat = input.question("\n\nHello " + name + ", please choose a category you would like to attempt:\n(1) Computing\n(2) JS Programming\n(3) HTML Programming \n(4) CSS Coding\n>> ");
// User's category selection, used to push Array Questions in the quiz class for that category, if user inputs a invalid category, keep looping the question
while (cat < 1 || cat > 4) {
    cat = input.question("\n" + name + " you have entered an invalid category, choices are from 1 to 4! \nHi " + name + ", please choose the quiz category you would like to attempt:\n(1) Computing\n(2) JS Programming\n(3) HTML Programming \n(4) CSS Coding\n>> ");
}

var myArray = [0, 1, 2, 3, 4]; // Array that is used to pull the questions 'randomly' by shuffling it with the function below

function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;
    while (ctr > 0) { // Checks if the array is empty or not
        index = Math.floor(Math.random() * 5);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1; // Returns the shuffled array
}
shuffle(myArray);
// —————————————————————————————————————————————————————————————— \\




// ——————————— Classes + Quiz Class Methods ——————————— \\
class MCQ { // MCQ Class holds the template for the questions that are pushed into the 'questions' array as a MCQ Object
    constructor(question, choices, answer, category) {
        this.question = question; // Holds the Questions in the 'questions' array
        this.choices = choices; // Holds an array of choices in the questions array. Array in an array logic.
        this.answer = answer; // Holds the correct answers (Equivalent to the correct answer in the choices, minus one)
        this.category = category; // 1 -> Computing   2 -> JS Programming  3 -> HTML Programming  4 -> CSS Coding
    }
}

class Quiz {
    constructor() {
        this.useranswer; // Used to store the user's answer temporarily for each question
        this.questions = []; // Used to store the questions that are pushed into this array as the user selects the category
        switch (cat) {
            case "1": // Computing Category
                this.questions.push(new MCQ("What does CPU stand for?", [" (1) Central Processing Unit\n", "(2) Computer Unit\n", "(3) Central Processor\n", "(4) None of the above"], 0, 1));
                this.questions.push(new MCQ("What does GPU stand for?", [" (1) Game Processor Unit\n", "(2) General Processing Unit\n", "(3) Graphic Picture Unit\n", "(4) Graphic Processing Unit"], 3, 1));
                this.questions.push(new MCQ("What does RAM stand for?", [" (1) Random Access Memory\n", "(2) Ready Access Memory\n", "(3) Read and Manipulate\n", "(4) Read-only Access Memory"], 0, 1));
                this.questions.push(new MCQ("What does PSU stand for?", [" (1) Play Station Unit\n", "(2) Personal Service Unit\n", "(3) Power Supply Unit\n", "(4) Power Supplier Unit"], 2, 1));
                this.questions.push(new MCQ("What does SSD stand for?", [" (1) Speed Solid Drive\n", "(2) Solid State Drive\n", "(3) Solid Speed Drive\n", "(4) Super State Drive"], 1, 1));
                break;
            case "2": // JS Programming Category
                this.questions.push(new MCQ("Which is the proper syntax for an IF statement?", [" (1) if (i == 5)\n", "(2) if i == 5\n", "(3) if {i == 5}\n", "(4) None of the above"], 0, 2));
                this.questions.push(new MCQ("How do you create a function in JavaScript?", [" (1) function (functionName)\n", "(2) functionName function\n", "(3) function(properties)\n", "(4) function functionName"], 3, 2));
                this.questions.push(new MCQ("How do you write 'Hey' in a Alert box?", [" (1) alert('hi')\n", "(2) box('hi')\n", "(3) abox('hi')\n", "(4) alertBox('hi')"], 0, 2));
                this.questions.push(new MCQ("Which is the proper syntax for a FOR statement that will run the iteration 5 times?", [" (1) for (var i = 1; i < 5; i++)\n", "(2) for {var i = 0; i < 5; i++}\n", "(3) for (var i = 0; i < 5; i++)\n", "(4) for (var i = 0; ; i++)"], 2, 2));
                this.questions.push(new MCQ("Inside which HTML element do we put the JavaScript?", [" (1) <js>\n", "(2) <script>\n", "(3) <scripting>\n", "(4) <javascript>"], 1, 2));
                break;
            case "3": // HTML Programming Category
                this.questions.push(new MCQ("What does HTML stand for?", [" (1) Hyper Text Markup Language\n", "(2) Hyperlinks and Text Markup Language\n", "(3) Home Tool Markup Language\n", "(4) None of the above"], 0, 3));
                this.questions.push(new MCQ("What is the correct HTML for adding a background color?", [" (1) <body bg='yellow'>\n", "(2) <body style='background-color:yellow;'>\n", "(3) <background>yellow</background>\n", "(4) <bg color='yellow'>"], 1, 3));
                this.questions.push(new MCQ("Choose the correct HTML element to define important text", [" (1) <imporant>\n", "(2) <b>\n", "(3) <strong>\n", "(4) <imp>"], 2, 3));
                this.questions.push(new MCQ("How can you open a link in a new tab/browser window?", [" (1) <a href='url' target='_new'>\n", "(2) <a href='url' target='_blank'>\n", "(3)  <a href='url' new>\n", "(4)  <a href='url' target='_new'>"], 1, 3));
                this.questions.push(new MCQ("What is the correct HTML for making a checkbox?", [" (1) <check>\n", "(2) <input type='check'>\n", "(3) <checkbox>\n", "(4) <input type='checkbox'>"], 1, 3));
                break;
            case "4": // CSS Coding Category
                this.questions.push(new MCQ("What does CSS stand for?", [" (1) Cascading Style Sheet\n", "(2) Colorful Style Sheet\n", "(3) Computer Style Sheet\n", "(4) None of the above"], 0, 4));
                this.questions.push(new MCQ("Which HTML element is used to define a internal style sheet?", [" (1) <script>\n", "(2) <css>\n", "(3) <styling>\n", "(4) <style>"], 3, 4));
                this.questions.push(new MCQ("What property is used to change the text color of an element?", [" (1) text-color\n", "(2) color\n", "(3) textcolor\n", "(4) fgcolor"], 1, 4));
                this.questions.push(new MCQ("What CSS property controls the font size?", [" (1) font-size\n", "(2) font-style\n", "(3) text-style\n", "(4) text-size"], 0, 4));
                this.questions.push(new MCQ("Which property is used to change the font of an element?", [" (1) font-type\n", "(2) font-style\n", "(3) font\n", "(4) font-family"], 3, 4));
                break;
        }
    }

    displayQsn() { // Displays the Question from the loaded 'questions' array
        // choices.join(" ") combines the array values with a spacing, removing comma
        this.useranswer = input.question("\n\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join(" ") + "\n------------------------\n >> ");
        // If user answer is invalid, loop the question with a warning that the input is invalid
        while (this.useranswer < 1 || this.useranswer > 4)
            this.useranswer = input.question("\n------------------------\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join(" ") + "\n------------------------\nInvalid Input, enter a choice from 1 to 4.\n >> ");
        // Stores the user answer, minus one in the answers array that is used later on
        answers[i] = (this.useranswer - 1); // To Store Answers For Summary Page
    }

    QuestionsLength() {
        return this.questions.length;
    }

    getQuestionAt(index) {
        var a = myArray[index] // Gets the myArray value for each chronological value of 'index'
        return this.questions[a] // Returns the myArray[index]
    }

    getCategory() {
        // q.category is the value looked at, this refers to the 'this.category' property from the MCQ Class used in the 'questions' array
        switch (q.category) { // For performance, switch case is used. Many if else is not performance-wise 'efficient' as compared to switch with numerous cases
            case 1:
                console.log("========================\nQsn Category: Information Technology [IT]\n========================\n");
                break;
            case 2:
                console.log("========================\nQsn Category: JS Programming\n========================\n");
                break;
            case 3:
                console.log("========================\nQsn Category: HTML Programming\n========================\n");
                break;
            case 4:
                console.log("========================\nQsn Category: CSS Coding\n========================\n");
                break;
        }
    }

    lifeLine() {
        if (isNaN(answers[i])) { // If answers[i] is not a number, do not execute lifeLine, safe proof for previous / next question
            return;
        }

        if (answers[i] != q.answer) {
            var random = Math.floor(Math.random() * 6) // Range of 0 to 5 (20% Probability of getting a lifeline when question is answered incorrectly)
            if (random == 2) {
                var lifeline = input.question("You were awarded a Life Line as you answered the question incorrectly! \n Type (1) for a 50/50 Life Line or (2) for a Hint! \n >> ");
                // Switch is used to pull the functionality for the 50/50 lifeline or hint lifeline
                switch (lifeline) {
                    case "1":
                        console.log("\nYou have chosen a 50/50 life line! Question will be printed again with only 2 choices!");
                        delete q.choices[answers[i]] // Deletes the option the user entered incorrectly
                        var randomChoiceIndex = 1 + Math.floor(Math.random() * 3) // Generates a random Integer from 1 to 3
                        if (q.answer == 3) { // If the correct answer is 3, delete the previous choices, to prevent deleting 'undefined' choices
                            delete q.choices[q.answer - randomChoiceIndex];
                            // If the user's answer is invalid, loop the question and it's choices that have been already deleted
                            do {
                                this.useranswer = input.question("\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join("") + "\n------------------------\n >> ");
                            }
                            while (this.useranswer == (answers[i] + 1) || this.useranswer == (q.answer - randomChoiceIndex) + 1 || this.useranswer < 1 || this.useranswer > 4)

                        } else {
                            var qci = q.answer + randomChoiceIndex; // Get the correct answer plus the random integer from 1 to 3 generated above
                            while (qci > 3) { // To safe guard deleting 'undefined' choices (E.g. you cannot delete choices above 3)
                                randomChoiceIndex = 1 + Math.floor(Math.random() * 3) // Generate a new randomChoiceIndex till qci is not more than 3
                                var qci = q.answer + randomChoiceIndex // Store a new value to qci
                            }

                            while (qci == answers[i]) { // To safe guard deleting the 'choice' that is already deleted
                                randomChoiceIndex = 1 + Math.floor(Math.random() * 3) // Generate a new randomChoiceIndex till qci != answers[i]
                                var qci = q.answer + randomChoiceIndex // Store a new value to qci
                            }

                            delete q.choices[q.answer + randomChoiceIndex];
                            // While user's answer is invalid, loop the question
                            do {
                                this.useranswer = input.question("\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join("") + "\n------------------------\n >> ")
                            } while (this.useranswer == (answers[i] + 1) || this.useranswer == (q.answer + randomChoiceIndex) - 1 || this.useranswer < 1 || this.useranswer > 4)
                        }
                        // Store the user's answers
                        answers[i] = this.useranswer - 1;
                        break;
                    case "2":
                        console.log("\nYou have chosen a 'Hint' life line! Question will be printed again with a given Hint!");
                        var hintindex = myArray[i]; // Retrieves the current question being attempted and stores it to hintindex variable, which is then used to get the hint for that question
                        do { // While User's Answer is invalid, loop the question
                            console.log("\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join(" ") + "\n——————————————————————————————————————————————————————————————————————\nHINT: " + hints[hintindex] + "\n——————————————————————————————————————————————————————————————————————");
                            this.useranswer = parseInt(input.question(" >> "));
                        } while (this.useranswer < 1 || this.useranswer > 4)
                        // Store the user's answers
                        answers[i] = this.useranswer - 1;
                        break;
                }
            }
        }
    }

    summary() {
        score = 0; // Loads the score to be 0 to ensure that it does not carry forward the score
        console.log("\n\n———————————————————————————————————[Summary Page]———————————————————————————————————\nHere are your answers:\n")
        for (var i = 0; i < quiz.QuestionsLength(); i++) {
            q = quiz.getQuestionAt(i);
            switch (isNaN([answers[i]])) { //Boolean switch case
                case true: // If it is not a number, display a 'ALERT'
                    console.log("\nQuestion-" + [i + 1] + ": " + q.question + "\n" + "[ALERT] Answer: Question has not been attempted or has an invalid input! Please attempt this question again!\n\n——————————————————————————————————————————————————————————————————————");
                    break;
                case false: // If it is a number, display the question and the user's answer
                    console.log("\nQuestion-" + [i + 1] + ": " + q.question + "\n" + "Your Answer: " + q.choices[answers[i]] + "\n\n——————————————————————————————————————————————————————————————————————");
                    break;
            }


            switch (answers[i] == q.answer) { // If user's answer equals to the correct answer, increase the score else no alteration
                case true:
                    score += 1;
                    break;
                case false:
                    score = score;
                    break;
            }
        }

        console.log("End of Summary Page\n——————————————————————————————————————————————————————————————————————————————————")
        summaryans = input.question("\nEnter 0 to submit your quiz or [1 to 5] to change your answer.\n>> ");
        summaryans = summaryans - 1; // When user inputs '1', it will pull the array index of '0'
        if (summaryans >= "0") {
            q = quiz.getQuestionAt(summaryans); // Because Array Index starts with "0"
            this.useranswer = input.question("\n------------------------\nQuestion " + [summaryans + 1] + ":\n" + q.question + "\n" + q.choices.join(" ") + "\n------------------------\n >> ");
            while (this.useranswer < 1 || this.useranswer > 4) // If user's answer is invalid, keep looping
                this.useranswer = input.question("------------------------\nQuestion " + [i + 1] + ":\n" + q.question + "\n" + q.choices.join(" ") + "\nInvalid Input, enter a choice from 1 to 4.\n-----------------------\n >> ");
            answers[summaryans] = this.useranswer - 1;
           // console.log(answers);
        }
    }

    submitpage() {
        console.log("\n\n\n\n")
        console.log("\n\n———————————————————————————————————[Submission Page]———————————————————————————————————\nHere are the answers:\n")
        for (var i = 0; i < quiz.QuestionsLength(); i++) {
            q = quiz.getQuestionAt(i);

            if (answers[i] == q.answer)
                console.log("\nQuestion-" + [i + 1] + " was answered correctly!");
            else
                console.log("\nQuestion-" + [i + 1] + " was answered incorrectly!");

            console.log("\nQuestion-" + [i + 1] + ": " + q.question + "\n" + "Correct Answer: " + q.choices[q.answer] + "\nYour Answer: " + q.choices[answers[i]] + "\n\n——————————————————————————————————————————————————————————————————————\n");
        }

        var sc2 = `strive for the remaining ${5-score} marks in the future!\n`
        var sc1 = `you can definitely do better in the future! Revise and you can achieve the ${5-score} marks in your next attempt!\n`

        console.log(name + " you obtained " + score + " mark(s) ");

        if (score == 5)
            console.log("You are spectacular! " + name + ", you're a genius!\n");
        else if (score >= 3)
            console.log("Good Job! " + name + ", " + sc2);
        else if (score >= 1)
            console.log("Good Attempt! " + name + ", " + sc1);
        else console.log("Oh no! You got 0 marks! Revise more in the future! Hardwork is rewarding!\n");
    }
}
// —————————————————————————————————————————————————————————————— \\




// ——————————— Global Variables & Function Storage ——————————— \\
var quiz = new Quiz(); // Assigns the Quiz Object to 'var quiz'
var answers = []; // Empty array to store useranswers, used for summary page
var summaryans; // Retrieves the summary answer page value
var score; // Global variable index 'score' is used for the methods in quiz class and exporting it through FS as a .txt file

function ExecQuiz() { // Function used to 'Execute the Quiz Methods'
    quiz.QuestionsLength();
    quiz.displayQsn();
    quiz.getCategory();
    quiz.lifeLine();
}
// —————————————————————————————————————————————————————————————— \\




// ————————————————————————————————— MAIN PROGRAM ———————————————————————————————————————————— \\
switch (cat) { // Switch that takes in the category input by the user above
    case "1":
        console.log("\n[Computing] Category Selected.\n");
        console.log(myArray);
        // Initializes the variable 'hints' array for the category
        var hints = ["CPU is the Central Component of a Computer!", "GPU is a graphics unit needed for output!", "Memory that is accessed frequently by the CPU", "Supplies Power to the entire system", "A drive that is fast, solid and reliable."]
        for (i = 0; i < quiz.QuestionsLength(); i++) {
            var q = quiz.getQuestionAt(i); // Instead of having to use this.questions, variable q uses the equivalent method in the 'quiz class', getQUestionAt(i);
            ExecQuiz(); // Executes the methods of the quiz (Display Qsn, Life Line, Prev / Next, Etc)
        }
        while (summaryans != -1) // As long as the input on the summary page is not a '0' or 'blank', keep looping the quiz.summary() method
            quiz.summary();

        quiz.submitpage(); // If summary page input is '0', display the Submit Page which is a Submission Review
        break;

    case "2":
        console.log("\n[JS Programming] Category Selected.\n");
        // Initializes the variable 'hints' array for the category
        var hints = ["An IF statement is always followed by a condition in brackets", "It requires a functionname and the word 'function' in the correct order!", "An alert box issues an 'alert' to the user in the form of a text box!", "A 'For' statement is used to run a block of code that increments to end the loop at one point or another!", "Javascript is a 'SCRIPT' and should be within a short tag if in a HTML document!"]
        for (i = 0; i < quiz.QuestionsLength(); i++) {
            var q = quiz.getQuestionAt(i); // Instead of having to use this.questions, variable q uses the equivalent method in the 'quiz class', getQUestionAt(i);
            ExecQuiz(); // Executes the methods of the quiz (Display Qsn, Life Line, Prev / Next, Etc)
        }
        while (summaryans != -1) // As long as the input on the summary page is not a '0' or 'blank', keep looping the quiz.summary() method
            quiz.summary();

        quiz.submitpage(); // If summary page input is '0', display the Submit Page which is a Submission Review
        break;

    case "3":
        console.log("\n[HTML Programming] Selected.\n")
        // Initializes the variable 'hints' array for the category
        var hints = ["HTML is a global markup language for web browsers!", "Background colors requires 'style:' to define inline styling!", "Important text is very similar to the tag <b>! In fact there's no visual difference between either tags!", "A link can be opened in a 'BLANK' new browser using the correct 'target' attribute", "Requires the Input tag to add in a CHECKbox"]
        for (i = 0; i < quiz.QuestionsLength(); i++) {
            var q = quiz.getQuestionAt(i); // Instead of having to use this.questions, variable q uses the equivalent method in the 'quiz class', getQUestionAt(i);
            ExecQuiz(); // Executes the methods of the quiz (Display Qsn, Life Line, Prev / Next, Etc)
        }
        while (summaryans != -1) // As long as the input on the summary page is not a '0' or 'blank', keep looping the quiz.summary() method
            quiz.summary();

        quiz.submitpage(); // If summary page input is '0', display the Submit Page which is a Submission Review
        break;

    case "4":
        console.log("\n[CSS Coding] Selected.\n")
        // Initializes the variable 'hints' array for the category
        var hints = ["Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML", "Define ~ STYLE ~ sheet rules in header section of a HTML document, requires the tag <____> ?", "The text color is very simple to change, in name, it's one logical word to define the color", "The best hint is for you to take the question literally. No tricks, right to the point", "The fonts are derived from a 'family' to load from"]
        for (i = 0; i < quiz.QuestionsLength(); i++) {
            var q = quiz.getQuestionAt(i); // Instead of having to use this.questions, variable q uses the equivalent method in the 'quiz class', getQUestionAt(i);
            ExecQuiz(); // Executes the methods of the quiz (Display Qsn, Life Line, Prev / Next, Etc)
        }
        while (summaryans != -1) // As long as the input on the summary page is not a '0' or 'blank', keep looping the quiz.summary() method
            quiz.summary();

        quiz.submitpage(); // If summary page input is '0', display the Submit Page which is a Submission Review
        break;
}
// ————————————————————————————————— END OF PROGRAM ———————————————————————————————————————————— \\



const fs = require('fs'); // Requires the 'file system' module, similar to the require('readline-sync') module.

var today = new Date(); // Assigns the date object to the variable 'today'
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); // Retrieves today's date
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); // Retrieves today's time
var fsname = today.getMinutes(); // fsname is the current minutes, used to assign it to the file name (To prevent overwrite)
let data = `Today's Date: ${date} \n Time (Submission): ${time} \n User Name: ${name} \n Total Score: ${score}`; // Uses backtick to insert the respective information in the file
//fs.writeFile(Path, Data, Callback)
// Path is defined as the location of the file to be saved, can be set to a Directory or the folder it is in
// Data is the information to be stored, can be named as per anything you want, but must have valid data
// Callback is used to assign a function, in this case, a arrow function. If the file is not able to be written, then throw the error.
fs.writeFile(`${name}Results${fsname}.txt`, data, (err) => {
    if (err) throw err;
})