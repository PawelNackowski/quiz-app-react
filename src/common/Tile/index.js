import { Content, Header, Wrapper } from './styled';

export const Tile = ({ title, content, extraContent }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <div>{extraContent}</div>
            <Content>{content}</Content>
        </Wrapper>
    );
};
