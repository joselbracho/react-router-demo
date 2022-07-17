import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Car from './pages/Car';

function App() {
  return (
    <div className="App">
      <h1 className="title-lighter">React Router Front-Demo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id/" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;
