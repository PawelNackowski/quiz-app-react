import { styled } from 'styled-components';

export const Wrapper = styled.div`
display: flex; 
justify-content: center; 
align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.neonGreen};
  border-radius: 50px;
  font-size: 18px;
  padding: 8px;
  margin-left: 18px;
  width: 120px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    border: 2px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
    filter: brightness(200%);
  }

  &:disabled {
    display: ${(props) => (props.$send ? 'none' : 'flex')};
    border: 2px solid gray;
    background-color: gray;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100px;
    padding: 6px;
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    width: 80px;
    padding: 4px;
    font-size: 16px;
  }
`;
