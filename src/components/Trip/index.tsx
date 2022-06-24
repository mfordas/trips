import { Picture } from 'components/Picture';
import { Info } from 'components/Info';
import { types } from 'constants/index';

import styles from './styles.module.scss';

export const Trip = ({ trip }: { trip: types.Trip }) => {
  return (
    <div className={styles.tripWrapper}>
      <Picture picture={trip.picture} />
      <Info trip={trip} />
    </div>
  );
};
