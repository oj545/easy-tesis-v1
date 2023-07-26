import { projectAction } from '../../redux/projectSlice';
import { userAction } from '../../redux/userSlice';

export const createNewFile = (content, title, token) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${title}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorizaton: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    });

    const data = await response.json();

    return dispatch(userAction.updateUserFiles(data));
  } catch (err) {
    dispatch(projectAction.setError('SomeThing want very worng!'));
  }
};
