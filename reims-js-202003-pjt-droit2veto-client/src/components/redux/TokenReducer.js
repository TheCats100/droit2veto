
const TokenReducer = (state = { token: null, id: null }, action) => {
  switch (action.type) {
    case 'SETTOKEN':
      // nouveau State
      return { ...state, token: action.newToken, id: action.newId, admin: action.newadmin };
    case 'LOGOUT':
      return { ...state, token: null, id: null };
    default:
      return state;
  }
};


export default TokenReducer;
