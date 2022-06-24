import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

export const Icon = ({ icon }: { icon: IconDefinition }) => (
  <FontAwesomeIcon icon={icon} className={styles.icon} />
);
