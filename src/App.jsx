import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Library from './pages/library/Library';
import Contact from './pages/contact/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      Welcome Heureka!
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/prestations' element={<Services />}/>
        <Route path='/bibliotheque' element={<Library />}/>
        <Route path='/contact' element={<Contact />}/>
      </ Routes>

    </div>
  );
}

export default App;
