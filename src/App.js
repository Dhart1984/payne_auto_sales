import { Routes, Route } from 'react-router-dom';
import { NavbarWithMegaMenu } from './Components/Nav/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { FooterWithLogo } from './Components/Footer/Footer';
import { Camry } from './Components/Vehicles/Camry';
import { Camaro } from './Components/Vehicles/Camaro';
import { Corvette } from './Components/Vehicles/Corvette';

function App() {
  return (
    <div>
      <NavbarWithMegaMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/camry" element={<Camry />} />
        <Route path="/camaro" element={<Camaro />} />
        <Route path="/corvette" element={<Corvette />} />
      </Routes>

      <FooterWithLogo />
    </div>
  );
}

export default App;
