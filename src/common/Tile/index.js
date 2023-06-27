import { Content, Header, Wrapper } from './styled';

export const Tile = ({ title, content }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <Content>{content}</Content>
        </Wrapper>
    );
};
