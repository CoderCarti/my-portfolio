import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Router>
  );
}

export default App;
