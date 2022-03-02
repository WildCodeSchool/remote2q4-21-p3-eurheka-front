import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserIdContext } from  "./context/AppContext.js";
import axios from "axios";
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Library from './pages/library/Library';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import './App.css';
//Don't forget to remove
import Test from './pages/Test.jsx';

function App() {
  const [footerStyle, setFooterStyle] = useState(true)
  const [uId, setUId] = useState(null);

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: '${process.env.REACT_APP_API_URL}jwtid',
        withCredentials: true,
      })
         .then((res) => setUId(res.data))
         .catch((err) => console.log("No token"));
    }    
    fetchToken();
  });

  const fetchUId=(newId) => {
    setUId(newId)
  };

  return (
    <UserIdContext.Provider value={{uId, fetchUId}} >
    <div className="App">
      <NavBar />    
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/prestations' element={<Services />}/>
        <Route path='/bibliotheque' element={<Library />}/>
        <Route path='/contact-avis' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        {/*Temp route*/}
        <Route path='/admin/resource' element={<Test />}/>
        {/*End Temp Route */}
      </ Routes>
      <Footer footerStyle={footerStyle} setFooterStyle={setFooterStyle} />
    </div>
    </UserIdContext.Provider>
  );
}

export default App;
