import Navbar from './components/navigations/Navbar';
import Footer from './components/navigations/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home';
import BookGrid from './components/books/BookGrid';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/books" element={<BookGrid/>}/>
          <Route path="/contact" element={<div><h1>Contact Us</h1><p>Get in touch with us.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
