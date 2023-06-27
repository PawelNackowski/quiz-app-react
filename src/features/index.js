import { Tile } from '../common/Tile';
import { PageQuestions } from './PageQuestions';
import { Position } from './styled';

export const Quiz = () => {
    return (
        <>
            <Position>
                <Tile title={'Quiz App'} content={<PageQuestions/>} />
            </Position>
        </>
    );
};
