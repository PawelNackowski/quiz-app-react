import styled from 'styled-components';
import { theme } from '../../theme';

export const Position = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  height: 450px;
  background: rgb(41, 41, 41);
  background: radial-gradient(
    circle,
    rgba(41, 41, 41, 1) 0%,
    rgba(72, 72, 72, 1) 0%,
    rgba(41, 41, 41, 1) 100%
  );
  border: 2px solid #178868;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 100px 60px rgba(46, 255, 213, 0.25);
  -moz-box-shadow: 0px 0px 100px 60px rgba(46, 255, 213, 0.25);
  box-shadow: 0px 0px 100px 60px rgba(46, 255, 213, 0.25);
`;

export const Header = styled.h1`
  align-self: center;
  letter-spacing: 2px;
  font-size: 56px;
  margin-bottom: 2px;

  @media (max-width: ${theme.breakpoints.mobileMax}px) {
    font-size: 46px;
  }
  @media (max-width: ${theme.breakpoints.mobileMin}px) {
    font-size: 36px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin: 24px;
  font-size: 18px;

  input {
    margin-right: 10px;
    accent-color: #181269;
  }

  @media (max-width: ${theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${theme.breakpoints.mobileMin}px) {
    font-size: 14px;
  }
`;