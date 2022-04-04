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
import AdminPage from './pages/admin/AdminPage.jsx';
import SplashPage from './pages/splash/SplashPage.jsx';
import UserPage from './pages/userPage/UserPage.jsx';
import CompanyPage from './components/profileUser/CompanyPage.jsx';
import './App.css';
import JobOffer from './pages/joboffer/JobOffer.jsx';

function App() {
  const [footerStyle, setFooterStyle] = useState(true)
  const [uId, setUId] = useState(null);
  const [uLevel,setULevel]=useState(null);


  useEffect(async() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}session/`,
        withCredentials: true,
      })
         .then((res) => {
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

  let connected=false;

  if(uId === 0)
  {
      connected=false;
  } else {
      connected=true;
  }

  const scrollToTop = () => {
    let pageHeight = 0
    if (uId === 0) {
        pageHeight = window.innerHeight;
    }
    window.scrollTo({
        top: pageHeight,
        left: 0,
        behavior: 'smooth'
    });
};

  return (
    <UserIdContext.Provider value={{uId, uLevel, setUId, setULevel, scrollToTop}} >
    <div className="App">
      {!connected&&
        <SplashPage />
      }
      <NavBar />    
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/prestations' element={<Services />}/>
        <Route path='/bibliotheque' element={<Library setUId={setUId} setULevel={setULevel}/>}/>
        <Route path='/contact-avis' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/emploi' element={<JobOffer />} />
        {/*Admin routes*/}
        <Route path='/admin' element={<AdminPage />}/>
        {/*User routes*/}
        <Route path='/mon-profil-particulier' element={<UserPage />}/>
        
      </ Routes>
      <Footer footerStyle={footerStyle} setFooterStyle={setFooterStyle} />
    </div>
    </UserIdContext.Provider>
  );
}

export default App;
