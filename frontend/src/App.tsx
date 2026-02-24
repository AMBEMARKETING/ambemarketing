import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactHeader from './components/ContactHeader';
import NavigationHeader from './components/NavigationHeader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ContactHeader />
        <NavigationHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-8 mt-16">
          <p>&copy; 2024 AMBE MARKETING. All rights reserved.</p>
          <p className="text-sm mt-2">GST: 29AGOPU2897F1ZI | Registered on GeM (Government e-Marketplace)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
