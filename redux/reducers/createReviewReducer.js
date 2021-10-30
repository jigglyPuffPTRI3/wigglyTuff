const initialState = {
  reviews: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REVIEWS': {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    default:
      return state;
  }
}
