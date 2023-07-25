import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  width: 200px;
  margin-top: 35px;
  font-size: 24px;
  padding: 10px 30px;
  border: solid #2bd1bb 3px;
  border-radius: 50px;
  transition: 0.5s;
  transform: translateY(0);
  cursor: pointer;

  &:hover {
    padding: 10px 48px;
    transform: translateY(-0px);
    color: #0066cc;
    border: solid 3px #0066cc;
  }

  @media (max-width: ${theme.breakpoints.mobileMax}px) {
    width: 160px;
    font-size: 22px;
    padding: 8px 26px;
    &:hover {
      padding: 8px 46px;
    }
  }

  @media (max-width: ${theme.breakpoints.mobileMin}px) {
    width: ${(props) => (props.$end ? '120px' : '140px')};
    font-size: 20px;
    padding: 8px 26px;
    &:hover {
      padding: 8px 42px;
    }
  }
`;
