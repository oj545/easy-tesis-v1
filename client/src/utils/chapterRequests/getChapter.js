import { url } from '../../data/links';

export const getChapter = async (title, token) => {
  const response = await fetch(`${url}/api/chapters/${title}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorizaton: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};
