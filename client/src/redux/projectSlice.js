import { initProject } from '../data/initValues';
import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    project: initProject,
    errorMessage: undefined,
  },
  reducers: {
    saveContent(state, action) {
      const { content, index, title } = action.payload;

      state.project[title].answers.content[index] = content;
      state.project[title].fileIsSave = false;
    },
    setChapterInstructions(state, action) {
      const title = action.payload.title;
      const data = action.payload;

      state.project[title].id = action.payload.id;
      state.project[title].answers = action.payload.answers;
      state.project[title].instructions = action.payload.instructions;

      if (state.project[title].instructions) {
        state.project[title].chapterIsloaded = true;
      }

      if (data.status === 'fail') {
        state.errorMessage = data.message;
      }
    },
    setError(state, action) {
      const error = action.payload;
      if (error?.message?.includes('Too many requests')) {
        state.errorMessage =
          'Too many request from this IP, Please try agine in an hour!';
      } else {
        state.errorMessage = error;
      }
    },

    cancelError(state, action) {
      state.errorMessage = undefined;
    },
    initializeState(state, action) {
      state.project = initProject;
    },
  },
});

export const projectAction = projectSlice.actions;
export default projectSlice;
