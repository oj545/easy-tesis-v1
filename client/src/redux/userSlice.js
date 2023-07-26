import { createSlice } from '@reduxjs/toolkit';
import { authThunk } from '../utils/userRequest/authThunk';
import { RemoveCookie, SetCookie } from '../hooks/cookies';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: 'test',
    authLoding: false,
    authErrorMessage: undefined,
    userDetails: { firstName: '', lastName: '', id: undefined },
    filesController: undefined,
    htmlDocument: undefined,
    htmlString: '',
    message: undefined,
  },
  reducers: {
    updateUserFiles(state, action) {
      const { message, title, status } = action.payload;

      if (status === 'success') {
        state.filesController[title].created = true;
        state.filesController[title].fileIsSave = true;
      }
      if (status === 'fail') {
        state.authErrorMessage = message;
        state.filesController[title].fileIsSave = false;
      }
      if (status === 'error') {
        state.authErrorMessage = message;
        state.filesController[title].fileIsSave = false;
      }
      if (message?.includes('file')) {
        state.message = message;
      }
    },
    cancelAuthError(state, action) {
      state.authErrorMessage = undefined;
    },
    cancelMessage(state, action) {
      state.message = undefined;
    },
    setHtmlDocoment(state, action) {
      const resulte = action.payload;
      const status = resulte?.status;

      if (status === 'success') {
        const parser = new DOMParser();
        state.htmlDocument = parser.parseFromString(resulte.html, 'text/html');
        state.htmlString = resulte.html;
      }

      if (status === 'fail') {
        state.authErrorMessage = resulte.message;
      }
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setUser(state, action) {
      const resulte = action.payload;
      const status = resulte?.status;
      const data = resulte?.data;

      if (status === 'success') {
        state.userDetails = {
          firstName: data.firstName,
          lastName: data.lastName,
          id: data._id,
        };
        state.filesController = data.filesController;
      }
    },
    logout(state, action) {
      RemoveCookie('jwt');
      state.filesController = undefined;
      state.token = undefined;
      state.userDetails = { firstName: '', lastName: '', id: undefined };
      state.filesController = undefined;
      state.htmlDocument = undefined;
    },
    setError(state, action) {
      const error = action.payload;

      if (error.message.includes('Too many requests')) {
        state.authErrorMessage =
          'Too many request from this IP, Please try agine in an hour!';
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.authLoding = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        const status = action.payload.status;
        const data = action.payload.data;
        const token = action.payload.token;
        const message = action.payload.message;

        if (status === 'success') {
          state.userDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            id: data._id,
          };
          state.token = token;
          SetCookie('jwt', token);
          state.filesController = data.filesController;
          state.message = message;
        }

        if (status === 'fail') {
          state.authErrorMessage = message;
        }

        state.authLoding = false;
      })
      .addCase(authThunk.rejected, (state, action) => {
        if (action?.error.message.includes('Too many request')) {
          state.authLoding = false;
          state.authErrorMessage =
            'Too many request from this IP, Please try agine in an hour!';
        } else {
          state.authLoding = false;
          state.authErrorMessage =
            'Something went wrong check your Internet Conections ';
        }
      });
  },
});

export const userAction = userSlice.actions;
export default userSlice;
