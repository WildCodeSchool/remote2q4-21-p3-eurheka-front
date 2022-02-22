import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';
import CreateUser from "../../components/create_user/CreateUser";
import OpinionDiv from "../../components/opiniondiv/OpinionDiv";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <CreateUser />
      <OpinionDiv />
      <AdviceCardList />
      <Partners />
    </div>
  );
};

export default Home;