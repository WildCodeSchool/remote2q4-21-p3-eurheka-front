import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Library from './pages/library/Library';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [footerStyle, setFooterStyle] = useState(true)

  return (
    <div className="App">
      Welcome Heureka!
      <ContactCard />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/prestations' element={<Services />}/>
        <Route path='/bibliotheque' element={<Library />}/>
        <Route path='/contact' element={<Contact />}/>
      </ Routes>
      <Footer footerStyle={footerStyle} setFooterStyle={setFooterStyle} />

    </div>
  );
}

export default App;
