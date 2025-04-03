import axios from 'axios';
import { useEffect, useState } from 'react';

export const useApi = (api, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(api, { params: params });
      setData((prev) => response.data);
      setLoad(false);
    } catch (err) {
      setErr(err.message);
      setLoad(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return [load, data, err];
};
