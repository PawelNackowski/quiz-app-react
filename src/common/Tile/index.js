import { Content, Position, Header, Wrapper } from './styled';

export const Tile = ({ title, content }) => {
    return (
      <Position>
        <Wrapper>
          <Header>{title}</Header>
          <Content>{content}</Content>
        </Wrapper>
      </Position>
    );
};