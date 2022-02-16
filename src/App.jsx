import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Library from './pages/Library';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />    

    </div>
  );
}

export default App;

/*      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/bibliotheque" element={<Library />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>*/