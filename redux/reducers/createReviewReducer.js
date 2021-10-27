const initialState = {
  firstName: '',
  lastName: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_FIRST_NAME': {
      return {
        ...state,
        firstName: action.payload,
      };
    }
    case 'UPDATE_LAST_NAME': {
      return {
        ...state,
        lastName: action.payload,
      };
    }
    default:
      return state;
  }
}
