import { useState } from 'react';
import { questions } from '../questions';
import { Pagination } from './Pagination';

export const PageQuestions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const handleAnswerChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const checkAnswer = (answer) => {
        return answer === questions[currentQuestionIndex].correctAnswer ? 1 : 0;
    };

    const handleSend = () => {
        const answerResult = checkAnswer(selectedAnswer);
        console.log('Selected Answer:', answerResult);

        if (answerResult === 1) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
        }
    };

    const isSendDisabled = selectedAnswer === null;

    const {
        id,
        title: currentQuestionTitle,
        answers,
    } = questions[currentQuestionIndex];

    return (
        <>
            <div key={id}>
                <h3>{currentQuestionTitle}</h3>
                <ul>
                    {answers.map(({ id, name, value }) => (
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
                <button onClick={handleSend} disabled={isSendDisabled}>
                    Send
                </button>
            </div>
            <Pagination
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                setSelectedAnswer={setSelectedAnswer}
                currentQuestionIndex={currentQuestionIndex}
                isSendDisabled={isSendDisabled}
                totalQuestions={questions.length}
                correctAnswersCount={correctAnswersCount}
                handleSend={handleSend}
                currentQuestionId={id}
            />
        </>
    );
};
