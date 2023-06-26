import { StyledLink } from "../styled";

export const PageStart = () => {
  return (
      <>
          <div>Hello !</div>
          <StyledLink to="/question/:questionId">start</StyledLink>
      </>
  );
}