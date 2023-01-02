
//  The total questions
import QuestionBank from "./data/questions.json";

//  Gets the JSON data, stringifies and parses as json object
function GetOriginalQuestions(){

    var stringifiedQuizData = JSON.stringify(QuestionBank);
    var parsedQuizString = JSON.parse(stringifiedQuizData);

    return parsedQuizString;

}

//  Returns a randomised set of questions
//  tqpr = total questions per round
function GetRandomQuestionSet(tqpr){

    //  Original question set.
    var originalQuestions = GetOriginalQuestions();

    //  Random Questions
    var setOfQuestions = [];

    for(let i = 0; i < tqpr; i++){

        var rng = Math.floor(Math.random() * originalQuestions.questionBank.length);
        setOfQuestions.push(originalQuestions.questionBank[rng]);

    }
    
    
    //return originalQuestions.questionBank;
    return setOfQuestions;

}

export { GetRandomQuestionSet }