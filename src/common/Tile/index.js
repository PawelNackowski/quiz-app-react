import { Content, ExtraContent, Header, Wrapper } from './styled';

export const Tile = ({ title, content, extraContent }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <ExtraContent>{extraContent}</ExtraContent>
            <Content>{content}</Content>
        </Wrapper>
    );
};
