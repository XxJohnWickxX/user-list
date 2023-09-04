import {useCallback, useEffect, useState} from 'react';

const useGetUsers = () => {
  const [data, setData] = useState<any>(null);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Error al realizar la solicitud', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud GET:', error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return data;
};

export default useGetUsers;
