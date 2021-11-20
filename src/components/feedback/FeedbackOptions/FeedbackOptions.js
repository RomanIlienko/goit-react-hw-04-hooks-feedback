import { v4 as uuidv4 } from 'uuid';
import styles from './FeedbackOptions.module.css'



function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div>
        {options.map(element => (
            <button
            key={uuidv4()}
            type="button"
            className={styles.button}
            onClick={onLeaveFeedback}
            name={element}
            >
            {element}
            </button>
        ))}
      </div>
    )
}

export default FeedbackOptions