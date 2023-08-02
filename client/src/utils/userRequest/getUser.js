import { userAction } from '../../redux/userSlice';
import { url } from '../../data/links';

export const getUser = (token) => async (dispatch) => {
  try {
    const response = await fetch(`${url}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorizaton: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return dispatch(userAction.setUser(data));
  } catch (err) {
    dispatch(userAction.setError(err));
  }
};
