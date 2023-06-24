import { questions } from '../../../features/answers';

export const Pagination = ({
    setCurrentQuestionIndex,
    setSelectedAnswer,
    currentQuestionIndex,
    isSendDisabled,
    correctAnswersCount,
    handleSend,
}) => {
    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
        handleSend();
    };

    return (
        <>
            <span>
                {currentQuestionIndex + 1}/{questions.length}
            </span>
            <button
                onClick={handleNextQuestion}
                disabled={
                    isSendDisabled ||
                    currentQuestionIndex === questions.length - 1
                }
            >
                Next
            </button>
            <div>
                Correct Answers: {correctAnswersCount}/
                {currentQuestionIndex + 1}
            </div>
        </>
    );
};
