import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={styles.statistics__list}>
      <li className={styles.statistics__item}>
        <span className={styles.statistics__condition}>Good:</span>
        <span className={styles.statistics__value}>{good}</span>
      </li>
      <li className={styles.statistics__item}>
        <span className={styles.statistics__condition}>Neutral:</span>
        <span className={styles.statistics__value}>{neutral}</span>
      </li>
      <li className={styles.statistics__item}>
        <span className={styles.statistics__condition}>Bad:</span>
        <span className={styles.statistics__value}>{bad}</span>
      </li>
      <li className={styles.statistics__item}>
        <span className={styles.statistics__condition}>Total:</span>
        <span className={styles.statistics__value}>{total}</span>
      </li>
      <li className={styles.statistics__item}>
        <span className={styles.statistics__condition}>Positive feedback:</span>
        <span className={styles.statistics__value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};