import { Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      Welcome Heureka!
      <Test />
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
      </ Routes>
    </div>
  );
}

export default App;
