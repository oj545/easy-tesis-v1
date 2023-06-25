export const getKeyAndValue = (obj) => {
  const results = Object.entries(obj).map((a) => {
    return { title: a[0], value: a[1] };
  });

  return results;
};
