import Navbar from './components/navigations/Navbar';
import Footer from './components/navigations/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home';
import BookGrid from './components/books/BookGrid';
import Timeline from './components/pages/TimeLine';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/books" element={<BookGrid/>}/>
          <Route path="/experience" element={<Timeline/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
