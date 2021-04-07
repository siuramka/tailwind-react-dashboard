import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [fetching, SetIsFetching] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
      fetch(url, { signal: abortCtrl.signal })
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          setData(data);
          SetIsFetching(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === `AbortError`) {
          } else {
            setError(err.message);
            SetIsFetching(false);
          }
        });
    return () => abortCtrl.abort();
  }, [url]);
  return { data, fetching, error };
};

export default useFetch;
