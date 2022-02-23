import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';
import CreateUser from "../../components/create_user/CreateUser";
import Security from "../../components/security/Security";
import OpinionDiv from "../../components/opiniondiv/OpinionDiv";
import UserActionsList from "../../components/user_actions/UserActionsList";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Espace Candidat</h2>
      </div>
      <UserActionsList />
      <CreateUser />
      <OpinionDiv />
      <AdviceCardList />
      <Partners />
      <Security />
    </div>
  );
};

export default Home;