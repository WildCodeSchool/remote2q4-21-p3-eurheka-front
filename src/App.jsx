import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Library from './pages/library/Library';
import Contact from './pages/contact/Contact';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [footerStyle, setFooterStyle] = useState(true)

  return (
    <div className="App">
      <NavBar />    
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
