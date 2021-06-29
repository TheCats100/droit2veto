import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import './ManageActivities.css';

const mapStateToProps = (state) => ({
  id: state.id,
});


const ManageActivities = ({ id, history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [allActivities, setAllActivities] = useState([]);
  const [logo, setLogo] = useState(null);

  const noAdmin = () => {
    Axios.get(`http://localhost:8000/users/admin/${id}`)
      .then((res) => {
        if (res.data.admin !== 1) {
          history.push('/activities');
        }
      });
  };

  useEffect(() => {
    noAdmin();
  });

  function post() {
    Axios.post('http://localhost:8000/activities', { title, description }).then(
      (res) => alert('enregistrement reussi'),
    );
  }

  function deleteActivity(activityId) {
    Axios.delete(`http://localhost:8000/activities/${activityId}`);
  }
  function getAllActivities() {
    Axios.get('http://localhost:8000/activities')
      .then((res) => res.data)
      .then((data) => {
        setAllActivities(data);
      });
  }

  useEffect(() => {
    getAllActivities();
  }, []);


  return (
    <form onSubmit={(event) => {
      post();
      getAllActivities();
      event.preventDefault();
    }}
    >
      <>
        <h1 className="titreManageAdmin">Zone Administration</h1>
        <div className="AdminLabel">
          <div>
            <label htmlFor="Title" />
            <p>Titre de l'activité</p>
            <input className="adminFormInput" type="title" name="title" id="title" placeholder="" onChange={(event) => setTitle(event.target.value)} required />
          </div>
          <div>
            <label htmlFor="description" />
            <p>Description de l'activité</p>
            <input className="adminFormInput" type="text" name="text" id="text" placeholder="" onChange={(event) => setDescription(event.target.value)} required />
          </div>
          <button type="submit" className="ValButActivityList">Valider</button>
        </div>
        {allActivities.map((activity) => (
          <>
            <section className="ListeActivitiesAdmin">
              <div className="AdminTitleAndDiscription">
                <details className="DetailActivity">
                  <summary className="TitleActivity" className="AdminTitle">
                    {activity.title}
                  </summary>
                  <div className="descriptionDivAdmin">
                    <p className="AdminDiscription">{activity.description}</p>
                    <button
                      type="button"
                      className="buttonDescriptionAdmin"
                      onClick={
                        () => {
                          Swal.fire({
                            title: 'Changer la description',
                            input: 'text',
                            inputValue: activity.description,
                            inputAttributes: {
                              autocapitalize: 'off',
                            },
                            showCancelButton: true,
                            cancelButtonText: 'Annuler',
                            preConfirm: (newDescription) => {
                              Axios.put(`http://localhost:8000/activities/${activity.id}`, { description: newDescription })
                                .then(() => getAllActivities())
                                .catch((err) => console.log(err));
                            },
                          });
                        }
                      }
                    >
                      Editer description
                    </button>
                  </div>
                </details>
              </div>
              <div className="buttonEditAdmin">
                <button
                  type="button"
                  className="buttonTitleAdmin"
                  onClick={
                    () => {
                      Swal.fire({
                        title: 'Changer le titre',
                        input: 'text',
                        inputValue: activity.title,
                        inputAttributes: {
                          autocapitalize: 'off',
                        },
                        showCancelButton: true,
                        cancelButtonText: 'Annuler',
                        preConfirm: (newTitle) => {
                          Axios.put(`http://localhost:8000/activities/${activity.id}`, { title: newTitle })
                            .then(() => getAllActivities())
                            .catch((err) => console.log(err));
                        },
                      });
                    }
                  }
                >
                  Editer Titre
                </button>
                <button
                  type="button"
                  onClick={
                    () => {
                      deleteActivity(activity.id);
                      getAllActivities();
                    }
                  }
                  className="ButtonSupManageadmin"
                >
                  X
                </button>
              </div>
            </section>
            <form onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData();
              data.append('adminLogoUpload', logo);
              const config = {
                headers: { 'content-type': 'multipart/form-data' },
              };
              Axios.post(`http://localhost:8000/uploadlogo/activity/${activity.id}`, data, config)
                .catch((err) => console.log(err))
                .then(() => console.log('success'))
                .then(() => getAllActivities());
            }}
            >
              <input className="buttonLogoAdmin"
                name="adminLogoUpload"
                type="file"
                onChange={(event) => {
                  setLogo(event.target.files[0]);
                }}
              /><br></br>
              <button type="submit" className="buttonLogoAdmin">Ajouter mon logo</button>
            </form>
            <img src={`http://localhost:8000/${activity.logo}`} alt="" className="logoActivityAdmin"/>
          </>
        ))}
      </>
    </form>


  );
};

export default connect(mapStateToProps)(ManageActivities);
