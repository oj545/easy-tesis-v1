import { projectAction } from '../../redux/projectSlice';
import { userAction } from '../../redux/userSlice';

export const saveFile = (answers, token) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${answers._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorizaton: `Bearer ${token}`,
      },
      body: JSON.stringify({ answers }),
    });

    const resulte = await response.json();
    console.log(resulte);
    dispatch(userAction.updateUserFiles(resulte));
  } catch (err) {
    dispatch(projectAction.setError('SomeThing want very worng!'));
  }
};
