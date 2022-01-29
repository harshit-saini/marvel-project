import { useState, useEffect } from 'react';
import api from '../util/api';

const useAxios = (endPoint, limit = 50, offset = 50) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(-1)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: { data: { results, total } } } = await api.get(endPoint, {
          params: {
            limit,
            offset
          }
        });
        setData(results)
        setTotal(total)
        setIsLoading(false)
      } catch (error) {
        console.log("error")
        setError(error)
      }
    }
    setIsLoading(true);
    getData();
  }, [endPoint, limit, offset])

  return { data, error, isLoading, total }
};

export default useAxios;
