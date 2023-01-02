
//  A single question.
function SingleQuestion(props) {

    //  Checks the answer is correct or wrong.
    //  buttonCode is "A", "B" or "C" depending on the button.
    const checkTheAnswer = function(buttonCode){

        if(props.correctAnswer == buttonCode){
            props.answerBehavior(true);
        } else {
            props.answerBehavior(false);
        }

    }

    return (
  
        <article>

            <h3> { props.questionText }</h3>
            <p>Question #{ props.questionNumber + 1 }</p>

            <button

                onClick = {

                    () => {
                        
                        let buttonCode = "A";
                        checkTheAnswer(buttonCode);

                    }

                }

            >
                { props.answerAText }

            </button>

            <button
            
                onClick = {

                    () => {
                        
                        let buttonCode = "B";
                        checkTheAnswer(buttonCode);

                    }

                }
            
            >
                { props.answerBText }

            </button>

            <button
            
                onClick = {

                    () => {
                        
                        let buttonCode = "C";
                        checkTheAnswer(buttonCode);

                    }

                }
            
            >
                { props.answerCText }

            </button>

        </article>
  
    );
  
  }

  export { SingleQuestion }