import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';
import CreateUser from '../../components/create_user/CreateUser';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Espace Candidat</h2>
      </div>
      <CreateUser />
      <AdviceCardList />
      <Partners />
    </div>
  );
};

export default Home;