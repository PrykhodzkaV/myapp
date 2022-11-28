import {useMemo} from 'react';
import {useFetch} from '../../hooks/useFetch';
import {Module} from '../../types/modules';

export const useModules = (trackId: string) => {
  const {data, loading, error} = useFetch(
    `https://odyssey-lift-off-rest-api.herokuapp.com/track/${trackId}/modules`,
  );
  const modules = data as [Module];
  return useMemo(() => {
    return {modules, loading, error};
  }, [error, loading, modules]);
};
