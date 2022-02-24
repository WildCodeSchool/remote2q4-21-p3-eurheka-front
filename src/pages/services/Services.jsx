import React from 'react';
import Inscription from "../../components/inscription/Inscription";
import ServicesList from '../../components/services/ServicesList';
import './Services.css';

const Services = () => {
  return (
    <div className="Services">
      <div className="Services-header">
        <h2>Espace Candidat</h2>
      </div>
      <ServicesList />
      <Inscription />
    </div>
  );
};

export default Services;
