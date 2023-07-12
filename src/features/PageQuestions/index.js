import { useState } from 'react';
import { questions } from '../questions';
import { Pagination } from './Pagination';
import { PageEnd } from '../PageEnd';
import { List, Wrapper } from './styled';
import { Button } from './Pagination/styled';

export const PageQuestions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showResult, setShowResult] = useState(false);

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

        if (currentQuestionIndex === questions.length - 1) {
            setShowResult(true);
        } else {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    const isSendDisabled = selectedAnswer === null;

    const {
        id,
        title: currentQuestionTitle,
        answers,
    } = questions[currentQuestionIndex]

    return (
        <>
            {!showResult ? (
                <>
                    <Wrapper>
                        <div key={id}>
                            <h3>{id}. {currentQuestionTitle}</h3>
                            <ul>
                                {answers.map(({ id, name, value }) => (
                                    <List key={id}>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`answer-${id}`}
                                                value={value}
                                                checked={
                                                    selectedAnswer === value
                                                }
                                                onChange={handleAnswerChange}
                                            />
                                            {name}
                                        </label>
                                    </List>
                                ))}
                            </ul>
                            <Button
                                onClick={handleSend}
                                disabled={
                                    isSendDisabled ||
                                    currentQuestionIndex !==
                                        questions.length - 1
                                }
                            >
                                Send
                            </Button>
                        </div>
                    </Wrapper>
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
            ) : (
                <div>
                    <PageEnd
                        correctAnswersCount={correctAnswersCount}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                </div>
            )}
        </>
    );
};
