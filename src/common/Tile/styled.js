import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
    margin: 10px;
    padding: 20px;
    min-width: 300px;
    height: 500px;
`;
export const Header = styled.h1`
    align-self: center;
    letter-spacing: 2px;
    margin-bottom: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 10px;
    accent-color: #181269;
  }
`;

export const ExtraContent = styled.div`
width: 300px;
`;