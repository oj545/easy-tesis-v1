import { createAsyncThunk } from '@reduxjs/toolkit';
import { url } from '../../data/links';

export const authThunk = createAsyncThunk(
  'user/authThunk',
  async ({ endpoint, body }) => {
    const response = await fetch(`${url}/api/users/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body }),
    });
    const results = await response.json();

    return results;
  }
);
