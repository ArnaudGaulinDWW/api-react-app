import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<Home />} />
        <Route path="/about" exact="true" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
