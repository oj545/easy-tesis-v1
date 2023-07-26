export const getChapter = async (title, token) => {
  const response = await fetch(`/api/chapters/${title}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorizaton: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};
