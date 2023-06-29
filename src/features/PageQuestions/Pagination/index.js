import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { questions } from '../../questions';
import { Button, Wrapper } from './styled';

export const Pagination = ({
    setCurrentQuestionIndex,
    setSelectedAnswer,
    currentQuestionIndex,
    isSendDisabled,
    totalQuestions,
    correctAnswersCount,
    handleSend,
}) => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    const [currentQuestionId, setCurrentQuestionId] = useState(null);

    useEffect(() => {
        const question = questions.find(
            (question) => question.id === parseInt(questionId)
        );
        if (question) {
            setCurrentQuestionId(question.id);
            setCurrentQuestionIndex(question.id - 1);
        } else {
            navigate(`/question/${questions[0].id}`);
        }
    }, [questionId, setCurrentQuestionIndex, navigate]);

    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        setSelectedAnswer(null);
        handleSend();

        if (nextQuestionIndex < totalQuestions) {
            const nextQuestion = questions[nextQuestionIndex];
            const nextUrl = `/question/${nextQuestion.id}`;
            navigate(nextUrl);
            setCurrentQuestionId(nextQuestion.id);
            setCurrentQuestionIndex(nextQuestionIndex);
        }
    };

    const handleBackQuestion = () => {
        const previousQuestionIndex = currentQuestionIndex - 1;
        setSelectedAnswer(null);

        if (previousQuestionIndex >= 0) {
            const previousQuestion = questions[previousQuestionIndex];
            const previousUrl = `/question/${previousQuestion.id}`;
            navigate(previousUrl);
            setCurrentQuestionId(previousQuestion.id);
            setCurrentQuestionIndex(previousQuestionIndex);
        }
    };

    return (
        <>
            <Wrapper>
                <button
                    onClick={handleBackQuestion}
                    disabled={currentQuestionIndex <= 0}
                >
                    Back
                </button>
                <span>
                    {currentQuestionIndex + 1}/{totalQuestions}
                </span>
                <Button
                    onClick={handleNextQuestion}
                    disabled={
                        isSendDisabled ||
                        currentQuestionIndex === totalQuestions - 1
                    }
                >
                    Next
                </Button>
                <div>
                    Correct Answers: {correctAnswersCount}/
                    {currentQuestionIndex + 1}
                </div>
            </Wrapper>
        </>
    );
};
