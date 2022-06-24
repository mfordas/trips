import { useCallback, useEffect, useState } from 'react';

import { Trip } from 'components/Trip';
import { constants, types } from 'constants/index';
import { validateApiTrips } from 'utils';

import styles from './styles.module.scss';
export const MainScreen = () => {
  const [trips, setTrips] = useState<types.Trip[]>([]);

  const fetchTrips = async () => {
    try {
      const response = await fetch(`${constants.API_URL}trips`);
      const apiTrips = await response.json();
      const trips = validateApiTrips(apiTrips);
      setTrips(trips);
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : 'Something went wrong',
      );
      alert('Something went wrong with data fetching, please try again');
    }
  };
  useEffect(() => {
    fetchTrips();
  }, []);

  const renderTrips = useCallback(() => {
    return (
      <>
        <h1>Recently viewed trips</h1>
        <section className={styles.wrapper}>
          {trips.map(trip => (
            <Trip trip={trip} key={trip.id} />
          ))}
        </section>
      </>
    );
  }, [trips]);

  return renderTrips();
};
