import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import WhatWeProvide from './components/WhatWeProvide/WhatWeProvide';

// Admin Content Management Imports
import ContentManagementHome from './components/ContentManagement/Home';
import AddHomeContent from './components/ContentManagement/AddHomeContent';
import WhoWeAre from './components/ContentManagement/WhoWeAre';
import AddWhoWeAreContent from './components/ContentManagement/AddWhoWeAreContent';
import AdminWhyUs from './components/ContentManagement/WhyUs'; // Renamed to avoid alias conflict
import AddWhyUsContent from './components/ContentManagement/AddWhyUsContent';
import ContactUs from './components/ContentManagement/ContactUs';
import AddContactUsContent from './components/ContentManagement/AddContactUsContent';

import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import WhoAreWe from './components/Footer/WhoAreWe/WhoAreWe';

import Dashboard from "./components/Dashboard/Dashboard";
import Leads from "./components/Leads/Leads management";
import Notification from "./components/Notification/Notification";
import Services from "./components/Services/Add Services";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Hero />} />
          <Route path="/who-we-are" element={<WhoAreWe />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/what-we-provide" element={<WhatWeProvide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/content-management" element={<ContentManagementHome />} />
          <Route path="/admin/content-management/add" element={<AddHomeContent />} />
          <Route path="/admin/content-management/who-we-are" element={<WhoWeAre />} />
          <Route path="/admin/content-management/who-we-are/add" element={<AddWhoWeAreContent />} />
          <Route path="/admin/content-management/why-us" element={<AdminWhyUs />} />
          <Route path="/admin/content-management/why-us/add" element={<AddWhyUsContent />} />
          <Route path="/admin/content-management/contact" element={<ContactUs />} />
          <Route path="/admin/content-management/contact/add" element={<AddContactUsContent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/leads" element={<Leads />} />

          
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
