import { useEffect, useState } from 'react';
import { getChapter } from '../utils/chapterRequests/getChapter';

function useFetch(title, token, isLoaded, id) {
  const [item, setItem] = useState({
    data: {},
    loading: false,
    error: undefined,
  });

  useEffect(() => {
    const asyncfun = async () => {
      if (!isLoaded) {
        setItem({ ...item, loading: true });
      }

      if (!isLoaded) {
        try {
          const { data, message } = await getChapter(title, token);

          if (message) {
            setItem({ ...item, loading: false, error: message });
          }
          if (data) {
            setItem({
              error: undefined,
              data: data,
              loading: false,
            });
          }
        } catch (err) {
          setItem({ ...item, error: err || 'SomeThing want very worng!' });
        }
      }
    };

    if (isLoaded) {
      setItem({ loading: false, data: {}, error: undefined });
    }
    asyncfun();
  }, [title, isLoaded, token]);

  return item;
}

export default useFetch;
