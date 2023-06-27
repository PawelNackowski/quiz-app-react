import { Navigate, Route, Routes } from 'react-router-dom';
import { Quiz } from './features';
import { PageStart } from './features/PageStart';
import { PageEnd } from './features/PageEnd';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/start" />} />
            <Route path="/start" element={<PageStart />} />
            <Route path="/question/:questionId" element={<Quiz />} />
            <Route path="/end" element={<PageEnd/>}/>
        </Routes>
    );
}

export default App;
