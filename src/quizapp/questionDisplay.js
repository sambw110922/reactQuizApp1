
//  Import a single question component.
import { SingleQuestion } from "./SingleQuestion.js";


//  The question displayer.
function QuestionDisplay(props) {

  //  The game state codes
  const isNotPlaying = 0;
  const isPlaying = 1;
  const isDone = 2;

  //  Check answer.
  //  Is passed to SingleQuestion. If correct, invoke 
  //  correct method from root. If wrong, invoke wrong 
  //  method from root. This is to increment the correct/wrong
  //  counter.
  const checkAnswer = function(answerIs){

    //  Answer is correct
    if(answerIs == true){

      props.incrementCorrectCounter();

    } else {

      //  Answer is wrong
      props.incrementWrongCounter();

    }

  }

  //  Depending on the state of the game, show:
  //  start screen, questions, results
  switch(props.currentGameState){

    //  Game is not being played
    case isNotPlaying:
        
      return (
            
        <div id="questionDisplay">

          <h2>Start the quiz!</h2>
          <button

            onClick = {
              
              () => {

                props.startGameBehavior();

              }

            }

          >
            Start
          </button>

        </div>

      );

    break;

    //  Game currently playing
    case isPlaying:

      return (
    
          <div className="questionDisplay">

                <h2>Question Display</h2>

                <p>This will be where the questions will be displayed.</p>

                <SingleQuestion
                  questionText = { props.currentQuestionText }
                  answerAText = { props.currentQuestionAnswerAText }
                  answerBText = { props.currentQuestionAnswerBText }
                  answerCText = { props.currentQuestionAnswerCText }
                  correctAnswer = { props.currentQuestionCorrectAnswerCode }
                  questionNumber = { props.questionNumber }
                  answerBehavior = { checkAnswer }
                ></SingleQuestion>

          </div>
    
        );

      break;

      //  Game has been played
      case isDone:

        return (

          <div className="questionDisplay">

              <h2>Game over!</h2>
              <p>Thank you for playing.</p>
              <p>Play again?</p>

              <button

                onClick = {
                  
                  () => {

                    props.startGameBehavior();

                  }

                }

                >
                Start
              </button>

          </div>

        );

      break;

    }
  
  }

  export { QuestionDisplay }