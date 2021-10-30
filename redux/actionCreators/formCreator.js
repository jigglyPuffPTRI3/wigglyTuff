export const updateFirstName = (name) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_FIRST_NAME',
      payload: name,
    });
  };
};

export const updateLastName = (name) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LAST_NAME',
      payload: name,
    });
  };
};
