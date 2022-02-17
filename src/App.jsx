import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContactCard from './components/contact/ContactCard';


function App() {
  return (
    <div className="App">
      Welcome Heureka!
      <ContactCard />
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
      </ Routes>
    </div>
  );
}

export default App;
