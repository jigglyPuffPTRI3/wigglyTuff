export const updateReviews = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'REVIEWS',
      payload: data,
    });
  };
};