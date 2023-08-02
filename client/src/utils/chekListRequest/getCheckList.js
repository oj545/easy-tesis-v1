import { url } from '../../data/links';
import { projectAction } from '../../redux/projectSlice';
import { userAction } from '../../redux/userSlice';

export const getCheckList = (token, userId, titles) => async (dispatch) => {
  try {
    const response = await fetch(
      `${url}/api/checkList/${userId}?title=${titles}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorizaton: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    return dispatch(userAction.setHtmlDocoment(data));
  } catch (err) {
    dispatch(projectAction.setError(err));
  }
};
