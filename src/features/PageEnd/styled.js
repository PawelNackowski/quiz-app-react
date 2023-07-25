import { styled } from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 35px;
gap: 12px;

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 32px;
};

@media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    font-size: 26px;
}
`