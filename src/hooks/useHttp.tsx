import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { MOCK_DATA } from '../components/game-card/data';

type UseAxiosResponse<T> = {
  data: T | null;
  isLoading: boolean;
  error: AxiosError<any> | null;
};

export const useHttp = <T,>(
  url: string,
  options: AxiosRequestConfig = {}
): UseAxiosResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, seError] = useState<AxiosError<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        setData(MOCK_DATA as any);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
        const response: AxiosResponse<T> = await axios(url, options);
        // setData(response.data);
      } catch (err) {
        seError(err as AxiosError);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};
