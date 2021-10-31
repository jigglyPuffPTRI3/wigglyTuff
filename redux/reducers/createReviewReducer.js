const initialState = {
  reviews: [],
  selectedReview: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REVIEWS': {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    case 'SELECT_REVIEW': {
      return {
        ...state,
        selectedReview: action.payload
      };
    };
    default:
      return state;
  }
}
