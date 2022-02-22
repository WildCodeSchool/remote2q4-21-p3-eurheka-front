import React from "react";
import AdviceCardList from '../../components/adviceCardList/AdviceCardList';
import Partners from '../../components/partners/Partners';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <AdviceCardList />
      <Partners />
    </div>
  );
};

export default Home;