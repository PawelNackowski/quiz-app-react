import { useState } from "react";
import { Answers, Header, Wrapper } from "./styled";
import { questions } from "../../features/answers";

export const Tile = ({ title }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setSelectedAnswer(null);
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const checkAnswer = (answer) => {
    return (
        answer === questions[currentQuestionIndex].correctAnswer ? "1" : "0"
    );
  }
  const handleSend = () => {
    console.log("Selected Answer:", checkAnswer(selectedAnswer));
  };

  const {id, title: currentQuestionTitle, answers} = questions[currentQuestionIndex];

  const isSendDisabled = selectedAnswer === null;

  return (
      <Wrapper>
        <Header>{title}</Header>
        <Answers>
          <div key={id}>
            <h3>{currentQuestionTitle}</h3>
            <ul>
              {answers.map(({id, name, value}) => (
                  <li key={id}>
                    <label>
                      <input
                          type="radio"
                          name={`answer-${id}`}
                          value={value}
                          checked={selectedAnswer === value}
                          onChange={handleAnswerChange}
                      />
                      {name}
                    </label>
                  </li>
              ))}
            </ul>
            <button onClick={handleSend} disabled={isSendDisabled}>Send</button>
          </div>
        </Answers>
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <span>
        {currentQuestionIndex + 1}/{questions.length}
      </span>
        <button onClick={handleNextQuestion} disabled={isSendDisabled || currentQuestionIndex === questions.length - 1}>
        Next
      </button>
    </Wrapper>
  );
};
