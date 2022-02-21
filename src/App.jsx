import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  const [footerStyle, setFooterStyle] = useState(true)


  return (
    <div className="App">
      Welcome Heureka!
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
      </ Routes>
      <Footer footerStyle={footerStyle} setFooterStyle={setFooterStyle} />
    </div>
  );
}

export default App;
