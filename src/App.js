import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhoAreWe from './components/Footer/WhoAreWe/WhoAreWe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <Footer />
    </div>
  );
}

export default App;
