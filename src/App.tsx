import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { MonthlySummary } from './components/MonthlySummary';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route  path='/' element={<MonthlySummary/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
