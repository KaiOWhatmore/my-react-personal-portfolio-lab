import Navbar from './components/navigations/Navbar';
import Footer from './components/navigations/Footer'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<div><h1>Home Page</h1><p>Welcome to the home page!</p></div>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/books" element={<div><h1>Books Page</h1><p>Ah, the wonderful world of books</p></div>} />
          <Route path="/contact" element={<div><h1>Contact Us</h1><p>Get in touch with us.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
