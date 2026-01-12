import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';
import RocketData from './RocketData';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/rocket_data" element={<RocketData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
