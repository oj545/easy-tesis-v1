import { userAction } from '../../redux/userSlice';

export const getUser = (token) => async (dispatch) => {
  console.log('getme');
  try {
    const response = await fetch(`/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizaton: `Bearer ${token}`,
      },
    });

    console.log(response);
    const data = await response.json();
    return dispatch(userAction.setUser(data));
  } catch (err) {
    console.log(err);
    dispatch(userAction.setError(err));
  }
};
