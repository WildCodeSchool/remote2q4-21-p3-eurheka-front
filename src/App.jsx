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

function App() {
  const [footerStyle, setFooterStyle] = useState(true)
  const [uId, setUId] = useState(null);
  const [uLevel,setULevel]=useState(null);

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}session/`,
        withCredentials: true,
      })
         .then((res) => {
            console.log(res.data);
            setUId(res.data.userId);
            setULevel(res.data.userLevelString);
          })
         .catch((err) =>{
          console.log("No token");
          setUId(0);
          setULevel('not connected');
         } );
    }    
    fetchToken();
  },[]);

  return (
    <UserIdContext.Provider value={{uId, uLevel}} >
    <div className="App">
      <NavBar />    
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/prestations' element={<Services />}/>
        <Route path='/bibliotheque' element={<Library />}/>
        <Route path='/contact-avis' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </ Routes>
      <Footer footerStyle={footerStyle} setFooterStyle={setFooterStyle} />
    </div>
    </UserIdContext.Provider>
  );
}

export default App;
