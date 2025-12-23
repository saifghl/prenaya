import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import WhatWeProvide from './components/WhatWeProvide/WhatWeProvide';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/what-we-provide" element={<WhatWeProvide />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
