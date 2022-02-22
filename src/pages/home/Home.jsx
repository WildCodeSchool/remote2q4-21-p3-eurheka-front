import React from "react";
import CreateUser from "../../components/create_user/CreateUser";
import AdviceCardList from "../../components/AdviceCardList";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <CreateUser />
      <AdviceCardList />
    </div>
  );
};

export default Home;