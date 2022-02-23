import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';
import CreateUser from "../../components/create_user/CreateUser";
import UserActionsList from "../../components/user_actions/UserActionsList";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <UserActionsList />
      <AdviceCardList />
      <Partners />
      <CreateUser />
    </div>
  );
};

export default Home;