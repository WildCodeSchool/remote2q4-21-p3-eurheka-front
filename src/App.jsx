import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Library from './pages/library/Library';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />    
    </div>
  );
}

export default App;
