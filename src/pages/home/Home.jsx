import React from "react";
import AdviceCardList from "../../components/AdviceCardList";
import CreateUser from "../../components/create_user/CreateUser";
import OpinionDiv from "../../components/opiniondiv/OpinionDiv";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <CreateUser />
      <OpinionDiv />
      <AdviceCardList />
    </div>
  );
};

export default Home;