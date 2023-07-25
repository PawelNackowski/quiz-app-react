import { Tile } from '../../common/Tile';
import { Wrapper } from '../PageQuestions/styled';
import {click} from '../clickSounds';
import { StyledLink } from '../styled';

export const PageStart = () => {
    return (
      <Tile
        title={'Quiz o Polsce'}
        content={
          <>
            <Wrapper>
              Witaj!<br/> 
              Czy jesteś gotowy/a na sprawdzenie swojej
              <br />
              wiedzy o Polsce? Ten quiz zawiera różnorodne
              <br />
              pytania dotyczące ciekawostek związanych
              <br />z naszym pięknym krajem.
            <p>Przygotuj się na wyzwanie i zobacz, ile wiesz o Polsce!</p>
            <StyledLink onClick={click} to="/question/:questionId">
              start
            </StyledLink>
            </Wrapper>
          </>
        }
      ></Tile>
    );
};