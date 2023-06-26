import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Position = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid black;
`;
