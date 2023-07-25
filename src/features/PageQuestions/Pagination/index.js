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

    return (
      <>
        <Wrapper>
          {currentQuestionIndex + 1}/{totalQuestions}
          <Button
            onClick={handleNextQuestion}
            disabled={
              isSendDisabled || currentQuestionIndex === totalQuestions - 1
            }
          >
            Next
          </Button>
          <Button
            $send
            onClick={handleSend}
            disabled={
              isSendDisabled || currentQuestionIndex !== questions.length - 1
            }
          >
            Send
          </Button>
        </Wrapper>
      </>
    );
};
