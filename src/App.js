import { Navigate, Route, Routes } from 'react-router-dom';
import { Quiz } from './features';
import { PageStart } from './features/PageStart';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/start" />} />
            <Route path="/start" element={<PageStart />} />
            <Route path="/question" element={<Quiz />} />
        </Routes>
    );
}

export default App;
