import { Tile } from '../../common/Tile';
import {click} from '../clickSounds';
import { Position, StyledLink } from '../styled';

export const PageStart = () => {
    return (
      <>

          <Tile
            title={'Quiz App'}
            extraContent={
              <>
                <p>
                  Witaj! Czy jesteś gotowy/a na sprawdzenie swojej wiedzy o
                  Polsce? Ten quiz zawiera różnorodne pytania dotyczące
                  ciekawostek związanych z naszym pięknym krajem.
                </p>
                <p>Przygotuj się na wyzwanie i zobacz, ile wiesz o Polsce!</p>
              </>
            }
            content={
              <>
                <StyledLink onClick={click} to="/question/:questionId">
                  start
                </StyledLink>
              </>
            }
          ></Tile>
      </>
    );
};
