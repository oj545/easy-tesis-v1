import { createAsyncThunk } from '@reduxjs/toolkit';

export const authThunk = createAsyncThunk(
  'user/authThunk',
  async ({ url, body }) => {
    const response = await fetch(`/api/users/${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body }),
    });

    const results = await response.json();
    return results;
  }
);
