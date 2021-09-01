const initialState = {
  users: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
}

export default usersReducer;
