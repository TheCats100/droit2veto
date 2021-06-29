
import React, { useState } from 'react';
import Axios from 'axios';
import './Activity.css';


function Activity({ activity, toggle, initialChecked, userId }) {
  const [checked, setChecked] = useState(initialChecked);

  const addActivity = () => {
    Axios.post(`http://localhost:8000/users/${userId}/activities`, { DVM_id: userId, Activities_id: activity.id })
      .then((res) => res.data);
  };

  const deleteActivity = () => {
    Axios.delete(`http://localhost:8000/users/${userId}/activities/${activity.id}`, { DVM_id: userId, Activities_id: activity.id })
      .then((res) => res.data);
  };

  return (
    <section className="unActivity">
      <div className="TitleAndDecri">
        <details className="DetailActivity">
          <summary className="TitleActivity">{activity.title}</summary>
          <p>{activity.description}</p>
        </details>
      </div>
      <div className="Toogle">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => {
              toggle();
              setChecked((previousChecked) => !previousChecked);
              {checked ? deleteActivity() : addActivity()};
            }}
            checked={checked}
          />
          <span className="slider round" />
        </label>
      </div>
    </section>
  );
}
export default Activity;
