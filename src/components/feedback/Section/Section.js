import React from "react";
import styles from 'components/feedback/Section/Section.module.css'
import PropTypes from 'prop-types';

import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

class Section extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    changeState = e => {
        const { name } = e.currentTarget;
        this.setState(prevState => {
        return { [name]: (prevState[name] += 1) };
        });
    };
    
    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        const sum = good + neutral + bad;
        return sum;
    };

    countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const positiveFeedbackPercentage = (good / this.countTotalFeedback()) * 100;
        return positiveFeedbackPercentage;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const { title } = this.props;

        return (
         <section className={styles.feedback}>
            <div className={styles.wrapper}>
                    <h2 className={styles.widget}>Feedbacks</h2>
                    <div className={styles.box}>
                        <p className={styles.feedback__text}>{title}</p>
                            <FeedbackOptions
                                options={['good', 'neutral', 'bad']}
                                onLeaveFeedback={this.changeState}
                            />
                        <p className={styles.statistics__text}>Statistics</p>
                            {this.countTotalFeedback() === 0 ? (
                            <Notification message="No feedback given" />
                            ) : (
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={this.countTotalFeedback()}
                                positivePercentage={
                                !this.countPositiveFeedbackPercentage() ? 0 : this.countPositiveFeedbackPercentage().toFixed(1)
                                }
                            />
                            )}
                    </div>
            </div>
        </section>
        )
    };
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;