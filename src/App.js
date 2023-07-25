import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;