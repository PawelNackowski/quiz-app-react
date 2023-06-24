import { questions } from '../../../features/answers'

export const Pagination = ({
    setCurrentQuestionIndex,
    setSelectedAnswer,
    currentQuestionIndex,
    isSendDisabled,
}) => {
    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setSelectedAnswer(null)
    }

    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
        setSelectedAnswer(null)
    }

    return (
        <>
            <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
            >
                Back
            </button>
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
        </>
    )
}
