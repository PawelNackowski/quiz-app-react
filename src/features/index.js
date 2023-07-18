import { Tile } from '../common/Tile';
import { PageQuestions } from './PageQuestions';

export const Quiz = () => {
    return (
      <>
        <Tile title={'Quiz App'} content={<PageQuestions />} />;
      </>
    );
};
