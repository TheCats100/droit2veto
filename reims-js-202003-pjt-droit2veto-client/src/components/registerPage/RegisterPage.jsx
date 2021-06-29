
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import '../logPage/logPage.css';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ordinalNumber, setOrdinalNumber] = useState('');

  const notifySuccess = () => toast.success('Enregistrement reussi', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifyError = () => toast.error('Enregistrement a échoué', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  toast.configure();
  function post() {
    Axios.post('http://localhost:8000/users', {
      email, password, ordinal_number: ordinalNumber,
    })
      .then(
        (res) => {
          notifySuccess();
        },
      )
      .catch(
        (err) => notifyError(),
      );
  }
  return (

    <div className="logPageContainer">
      <ToastContainer />
      <section className="logPageLeft">
        <h1 className="logPageTitle">Droit2Veto</h1>
        <div className="logPageTextDiv">
          <p className="logPageText1">Bienvenue sur Droit2Veto</p>
          <p className="logPageText2">L’application web qui vous permet de générer vos propres pdf</p>
        </div>
      </section>
      <section className="logPageRight">
        <h1 className="logPageText3">Créer votre compte </h1>
        <form onSubmit={(event) => {
          post();
          event.preventDefault();
        }}
        >
          <div className="logPageFormInputDiv">
            <label htmlFor="email" className="logPageLabel">Adresse mail</label>
            <input className="logPageFormInput" type="email" name="mail" id="email" placeholder="jean.dupont@gmail.com" onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="password" className="logPageLabel">Mot de passe</label>
            <input className="logPageFormInput" type="password" name="password" id="password" placeholder="secret1234" onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="ordinal_number" className="logPageLabel">Numero Ordinal</label>
            <input className="logPageFormInput" type="number" name="ordinal_number" id="ordinal_number" placeholder="548934" max="9999999" min="10000" onChange={(event) => setOrdinalNumber(event.target.value)} required />
          </div>
          <p className="logPageFormText">
            Déjà membre ? Connectez-vous
            <Link to="/login" className="logPageLink">ici</Link>
          </p>
          <div className="logPageFormButtonDiv">
            <button type="submit" className="logPageFormButton">S'inscrire</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
