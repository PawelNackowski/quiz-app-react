import { Tile } from '../../common/Tile';
import { Position, StyledLink } from '../styled';

export const PageStart = () => {
    return (
        <>
            <Position>
                <Tile
                    title={'Quiz App'}
                    extraContent={
                        <>
                        hello to quiz
                        </>
                    }
                    content={
                        <>
                            <StyledLink to="/question/:questionId">
                                start
                            </StyledLink>
                        </>
                    }
                ></Tile>
            </Position>
        </>
    );
};
