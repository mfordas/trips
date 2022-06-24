import { memo, useCallback } from 'react';
import { faStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './icon';

import styles from './styles.module.scss';

export const Rating = memo(({ rating }: { rating: number }) => {
  const generateRating = useCallback(() => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars > 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <>
        {!!fullStars &&
          Array(fullStars)
            .fill(0)
            .map((el, index) => (
              <Icon icon={faStarSolid} key={`fullStar${el}${index}`} />
            ))}
        {!!halfStar && <Icon icon={faStarHalfStroke} key={`halfStar`} />}
        {emptyStars > 0 &&
          Array(emptyStars)
            .fill(0)
            .map((el, index) => (
              <Icon icon={faStar} key={`emptyStar${el}${index}`} />
            ))}
      </>
    );
  }, [rating]);

  return (
    <div className={styles.ratingWrapper}>
      {generateRating()}
      <p>{rating}</p>
    </div>
  );
});
