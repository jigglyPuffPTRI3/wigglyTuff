export const updateReviews = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'REVIEWS',
      payload: data,
    });
  };
};

export const selectedReviews = (review) => {
  return (dispatch) => {
    dispatch({
      type: 'SELECT_REVIEW',
      payload: review,
    });
  };
};