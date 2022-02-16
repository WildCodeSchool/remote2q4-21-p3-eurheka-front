import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      Welcome Heureka!
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
      </ Routes>
      <Footer />
    </div>
  );
}

export default App;
