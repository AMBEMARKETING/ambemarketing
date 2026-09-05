import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ContactHeader from './components/ContactHeader';
import NavigationHeader from './components/NavigationHeader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import { company } from './data/products';

function Footer() {
  return <footer className="site-footer">
    <div className="site-container footer-main">
      <div className="footer-brand-block">
        <img src="/ambe-logo.png" alt="AMBE Marketing" />
        <div><div className="footer-brand">AMBE MARKETING</div><p>{company.tagline}</p></div>
      </div>
      <div><div className="footer-title">Explore</div><div className="footer-links"><NavLink to="/">Home</NavLink><NavLink to="/about">About Us</NavLink><NavLink to="/products">Products</NavLink><NavLink to="/services">Services</NavLink><NavLink to="/contact">Contact Us</NavLink></div></div>
      <div><div className="footer-title">Contact</div><div className="footer-links"><a href={company.phoneHref}>{company.phone}</a><a href={company.emailHref}>{company.email}</a><a href={company.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div></div>
      <div><div className="footer-title">Office</div><p className="footer-address">{company.address}</p><span className="gem-pill">Registered on Government e-Marketplace (GeM)</span></div>
    </div>
    <div className="footer-bottom"><div className="site-container"><span>© {new Date().getFullYear()} AMBE MARKETING</span><span>IT · POWER BACKUP · SECURITY</span></div></div>
  </footer>;
}

export default function App() {
  return <Router><div className="app-shell"><ContactHeader/><NavigationHeader/><main className="main-content"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/products" element={<Products/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></div></Router>;
}
