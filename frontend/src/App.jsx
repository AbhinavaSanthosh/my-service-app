import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactServiceProvider from './components/ContactServiceProvider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ServiceProviderLogin from './components/pages/ServiceProviderLogin';
import ServiceProviderRegistration from './components/pages/ServiceProviderRegistration';
import ServiceProvidersList from './components/pages/ServiceProvidersList';
import UserLogin from './components/pages/UserLogin';
import UserPage from './components/pages/UserPage';
import UserPageDisplay from './components/pages/UserPageDisplay';
import UserRegistration from './components/pages/UserRegistration';
import ServicerProfilePage from './components/pages/ServicerProfilePage';
import ContactPage from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegistration />} />
            <Route path="/user/page" element={<UserPage />} />
            <Route path="/user/pageDisplay" element={<UserPageDisplay />} />
            <Route path="/servicer/login" element={<ServiceProviderLogin />} />
            <Route path="/servicer/register" element={<ServiceProviderRegistration />} />
            <Route path="/ServicerProfilePage" element={<ServicerProfilePage />}/>
            <Route path="/services" element={<ServiceProvidersList />} />
            <Route path="/contact/:providerId" element={<ContactServiceProvider />} />
            <Route path="/ContactPage" element={<ContactPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
