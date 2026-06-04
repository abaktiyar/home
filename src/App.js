import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import ResumePage from './components/ResumePage';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;