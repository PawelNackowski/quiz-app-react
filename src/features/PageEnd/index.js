import { StyledLink } from "../styled";
import { Wrapper } from "./styled";

export const PageEnd = ({ correctAnswersCount, currentQuestionIndex }) => {
    return (
      <Wrapper>
        Poprawne odpowiedzi:
        <div>
          {correctAnswersCount} z {currentQuestionIndex + 1}
        </div>
        <StyledLink to="/start">Go to home</StyledLink>
      </Wrapper>
    );
};
