import React from 'react';
import './BlocTuto.css';
import { Link } from 'react-router-dom';

function BlocTuto() {
  return (

    <div className="choixPage">
      <h1 className="blocTutoWelcome">Bienvenue sur Droit2Veto</h1>
      <div className="flexButton">

        <div className="ButtonLink">
          <Link to="/informations" className="tutoButton">Mes informations</Link>
          <p className="paraButton">Consulter vos informations personnelles</p>
        </div>

        <div className="ButtonLink">
          <Link to="/activities" className="tutoButton"> Mes activités </Link>
          <p className="paraButton">Générer un pdf indiquant quelles activités vous pratiquez dans votre clinique</p>
        </div>

      </div>

    </div>

  );
}

export default BlocTuto;
