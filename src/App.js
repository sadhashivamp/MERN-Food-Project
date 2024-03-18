import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <div data-bs-theme="dark">
      <Router>
        <Routes>
          <Route exavct path="/" element={<Home />} />
          <Route exavct path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
