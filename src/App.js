import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Comics from './pages/Comics';
import Creators from './pages/Creators';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/creators" element={<Creators />} />
      </Routes>
    </>
  )
}

export default App;
