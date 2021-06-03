export const initialState = {
  //Initil state where the user is null
  user: null,
};

export const actionTypes = {
  //This is action
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return false;
  }
};

export default reducer;
