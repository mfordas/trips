import { memo } from 'react';
import { constants } from 'constants/index';

import styles from './styles.module.scss';

export const Picture = memo(({ picture }: { picture: string }) => {
  return (
    <img
      src={`${constants.API_URL}${picture}`}
      alt=""
      className={styles.picture}
    />
  );
});
