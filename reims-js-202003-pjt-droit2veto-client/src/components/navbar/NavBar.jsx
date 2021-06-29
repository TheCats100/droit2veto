import React from 'react';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './navbar.css';
import profil from '../../icon/profil.png';
import maison from '../../icon/maison.png';
import exit from '../../icon/exit.png';
import paw from '../../icon/paw.png';
import LogOut from '../home/LogOut';

function NavBar() {
  return (
    <>
      <nav className="navbarVerticaleBloc">
        <Link className="navbarTitle" to="/">Droit2Veto</Link>
        <ul>
          <li>
            <img src={profil} alt="" />
            <Link className="navbarLink" to="/informations">Mes informations</Link>
          </li>
          <li>
            <img src={maison} alt="" />
            <Link className="navbarLink" to="/activities">Mes activités</Link>
          </li>
          <li>
            <img src={exit} alt="" />
            <LogOut />
          </li>
          <li>
            <img id="navbarPaw" src={paw} alt="" />
          </li>
        </ul>
      </nav>

    </>
  );
}

export default NavBar;
