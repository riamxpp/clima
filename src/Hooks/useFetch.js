import { useCallback, useState } from "react";

const useFetch = (url = "") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (url2 = "") => {
      let response;
      let json;
      try {
        setError(false);
        setLoading(true);
        if (url2) {
          response = await fetch(url2);
        } else {
          response = await fetch(url);
        }
        json = await response.json();
        if (!response.ok) throw new Error();
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
        return { response, json };
      }
    },
    [url]
  );

  return {
    request,
    loading,
    error,
  };
};

export default useFetch;
