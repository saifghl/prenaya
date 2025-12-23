import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhoAreWe from './components/Footer/WhoAreWe/WhoAreWe';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContentManagementHome from './components/ContentManagement/Home';
import AddHomeContent from './components/ContentManagement/AddHomeContent';
import WhoWeAre from './components/ContentManagement/WhoWeAre';
import AddWhoWeAreContent from './components/ContentManagement/AddWhoWeAreContent';
import WhyUs from './components/ContentManagement/WhyUs';
import AddWhyUsContent from './components/ContentManagement/AddWhyUsContent';
import ContactUs from './components/ContentManagement/ContactUs';
import AddContactUsContent from './components/ContentManagement/AddContactUsContent';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoAreWe />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/content-management" element={<ContentManagementHome />} />
          <Route path="/admin/content-management/add" element={<AddHomeContent />} />
          <Route path="/admin/content-management/who-we-are" element={<WhoWeAre />} />
          <Route path="/admin/content-management/who-we-are/add" element={<AddWhoWeAreContent />} />
          <Route path="/admin/content-management/why-us" element={<WhyUs />} />
          <Route path="/admin/content-management/why-us/add" element={<AddWhyUsContent />} />
          <Route path="/admin/content-management/contact" element={<ContactUs />} />
          <Route path="/admin/content-management/contact/add" element={<AddContactUsContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
