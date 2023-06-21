import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #ddd;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    padding: 20px;
    width: 500px; 
    height: 500px;
`;
export const Header = styled.h1`
  text-align: center;
`;

export const Answers = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    input {
      accent-color: green;
    }
`;