

import './App.css';

//  Imports from react
import { useState } from 'react';

//  The main navigation component
import  { MainNavigation } from "./quizapp/navigation.js";

//  The main footer
import { MainFooter } from './quizapp/mainfooter';

//  The question display component
import { QuestionDisplay } from './quizapp/questionDisplay';

//  The question manager
import { GetRandomQuestionSet } from './quizapp/questionManager';

//  Some details
const theAppName = "Sam's Quiz App";
const tagline = "An quiz that everyone can enjoy!";
const appOwner = "2022";

//  game states
//  0 = not playing
//  1 = is playing
//  2 = is done
const isPlaying = 1;
const isNotPlaying = 0;
const isDone = 2;

//  The main app.
function App() {

  //  The total number of questions per round
  const totalNumberQuestionsPerRound = 12;

  //  The state of the game.
  var [ gameState, setGameState ] = useState(isNotPlaying);

  //  The set of questions
  var [ questionSet, setQuestionSet ] = useState(GetRandomQuestionSet(totalNumberQuestionsPerRound));

  //  The question pointer
  var [ currentPointer, setCurrentPointer ] = useState(0);

  //  The number of questions the player got correct
  var [ correctQuestions, setCorrectQuestions ] = useState(0);

  //  The number of questions the player got wrong
  var [ wrongQuestions, setWrongQuestions ] = useState(0);

  //  Update the pointer.
  const updatePointer = function(){

    //  Only update pointer of game is playing
    if(gameState == isPlaying){

      if(currentPointer >= totalNumberQuestionsPerRound-1){

        setGameState(isDone);

      } else {

        let currentPointerPlusOne = currentPointer += 1;
        setCurrentPointer(currentPointerPlusOne);

      }

    }

  }

  return (

    <div className="App">

      <MainNavigation
        theAppName = { theAppName }
        theAppTagline = { tagline }
      ></MainNavigation>

      <QuestionDisplay

        //  The current question number.
        questionNumber = { currentPointer }

        //  Start the game
        startGameBehavior = {

          () => {
              
            //  Set the game state
            setGameState(isPlaying);

          }

        }

        //  The current question text
        currentQuestionText = { questionSet[currentPointer].questionTitle }

        //  The answer texts
        currentQuestionAnswerAText = { questionSet[currentPointer].AnswerA }
        currentQuestionAnswerBText = { questionSet[currentPointer].AnswerB }
        currentQuestionAnswerCText = { questionSet[currentPointer].AnswerC }

        //  The correct answer code
        currentQuestionCorrectAnswerCode = { questionSet[currentPointer].CorrectAnswerCode }

        //  The current game state.
        currentGameState = { gameState }

        //  Player has gotten a question correct.
        incrementCorrectCounter = {

          () => {

            window.alert("is right");

            let currentCorrectPlusOne = correctQuestions + 1;
            setCorrectQuestions(currentCorrectPlusOne);

            //  Update the pointer.
            updatePointer();

          }

        }

        //  Player has gotten a question wrong.
        incrementWrongCounter = {

          () => {

            window.alert("is wrong");

            let currentWrongPlusOne = wrongQuestions + 1;
            setWrongQuestions(currentWrongPlusOne);

            //  Update the pointer.
            updatePointer();

          }

        }

      ></QuestionDisplay>

      <MainFooter
        ownerName = { appOwner }
      ></MainFooter>
    
    </div>

  );

}

export default App;
