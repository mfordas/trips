import { Rating } from 'components/Rating';
import { types } from 'constants/index';

import styles from './styles.module.scss';

export const Info = ({ trip }: { trip: types.Trip }) => {
  return (
    <div className={styles.infoWrapper}>
      <h3>{trip.info}</h3>
      <h2>{trip.title}</h2>
      <Rating rating={trip.rating} />
      <div className={styles.priceWrapper}>
        <p>
          {`From `}
          {trip.currency}
          {trip.discountPrice}
        </p>
        <p>
          {trip.currency}
          {trip.regularPrice}
        </p>
      </div>
    </div>
  );
};
