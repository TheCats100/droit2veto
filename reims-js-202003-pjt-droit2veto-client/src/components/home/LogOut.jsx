import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  token: state.token,
});

function LogOut({ dispatch }) {
  return (
    <button
      type="button"
      onClick={() => (dispatch({
        type: 'LOGOUT',
        token: null,
        id: null,
      }))}
      className="logoutButton"
    >
      Déconnexion
    </button>
  );
}


export default connect(mapStateToProps)(LogOut);
