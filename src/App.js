
import './App.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import { Route, Routes } from 'react-router-dom';
import HealthForm from './components/HealthForm';

function App() {
  return (
    <div>
  <Navbar />
  <Routes>
    <Route path='/' element = {<Home />} />
    <Route path='/services' element= {<Services />} />
    <Route path='/about' element= {<About />} />
    <Route path='/contact' element= {<Contact />} />
    <Route path='/health-form' element= {<HealthForm />} />
  </Routes>
    </div>
  );
}

export default App;
