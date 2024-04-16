import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
// import Footer from './components/footer';
import Home from './components/home';
import Ranking from './components/ranking';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universityranking" element={<Ranking />} />
          {/* Add more routes for other pages/components */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
