import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';
import CreateUser from "../../components/create_user/CreateUser";
import Security from "../../components/security/Security";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <CreateUser />
      <AdviceCardList />
      <Partners />
      <Security />
    </div>
  );
};

export default Home;