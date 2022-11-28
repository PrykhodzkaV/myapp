import {useEffect, useState} from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState({} as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(resultData => {
        setData(resultData);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, [url]);
  return {data, loading, error};
};
