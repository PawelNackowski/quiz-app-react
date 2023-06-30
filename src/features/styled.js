import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Position = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    padding: 10px 30px;
    border: solid #2bd1bb 3px;
    border-radius: 50px;
    transition: 0.5s;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &:hover {
        padding: 10px 56px;
        transform: translateY(-0px);
        color: #0066cc;
        border: solid 3px #0066cc;
    }
`;
