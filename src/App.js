import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Quiz } from './features';
import { toQuestion, toQuiz } from './routes';
import { StyledLink } from './features/styled';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path={toQuiz()}>
                    <div>Hello !</div>
                    <StyledLink to="/question">start</StyledLink>
                </Route>
                <Route path={toQuestion()}>
                    <Quiz />
                </Route>
                <Route>
                    <Redirect to={toQuiz()} />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
