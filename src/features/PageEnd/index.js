
export const PageEnd = ({ correctAnswersCount, currentQuestionIndex }) => {
    return (
        <div>
            Correct answers: {correctAnswersCount} of {currentQuestionIndex + 1}
        </div>
    );
};
