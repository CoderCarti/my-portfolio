import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      </Router>
  );
}

export default App;
