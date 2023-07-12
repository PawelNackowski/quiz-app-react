import { StyledLink } from "../styled";
import { Wrapper } from "./styled";

export const PageEnd = ({ correctAnswersCount, currentQuestionIndex }) => {
    return (
      <Wrapper>
        Correct answers:
        <div>
          {correctAnswersCount} of {currentQuestionIndex + 1}
        </div>
        <StyledLink to="/start">Go to home</StyledLink>
      </Wrapper>
    );
};
