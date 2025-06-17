   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskManager from './components/TaskManager';
import { ThemeProvider } from './lib/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
   



