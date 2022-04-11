import React, { useContext } from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import CreateUser from "../../components/create_user/CreateUser";
import OpinionDiv from "../../components/opiniondiv/OpinionDiv";
import UserActionsList from "../../components/user_actions/UserActionsList";
import { UserIdContext } from  '../../context/AppContext';
import './Home.css';

const Home = () => {

  const {uId}=useContext( UserIdContext);
  let connected=false;

  if(uId === 0)
  {
      connected=false;
  } else {
      connected=true;
  }

  return (
    <div className="Home">
      <div className="Home-header">
        <h2>Espace Candidat</h2>
      </div>
      <UserActionsList />
      {!connected&& 
        <CreateUser />
      }
      <OpinionDiv />
      <AdviceCardList />
    </div>
  );
};

export default Home;