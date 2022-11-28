import {useMemo} from 'react';
import {useFetch} from '../../hooks/useFetch';
import {Track} from '../../types/track';

export const useTracks = () => {
  const URL_TRACKS = 'https://odyssey-lift-off-rest-api.herokuapp.com/tracks';
  const {data, loading, error} = useFetch(URL_TRACKS);
  const tracks = data as [Track];
  return useMemo(() => {
    return {tracks, loading, error};
  }, [error, loading, tracks]);
};
