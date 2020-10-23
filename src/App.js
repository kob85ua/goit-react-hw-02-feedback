import React, { Component } from "react";

import Section from "./components/Section";
import Notification from "./components/Notification";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

class App extends Component {
  static defaultProps = { step: 1 };

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonHandlers = (value, stateValueName) => {
    for (stateValueName in this.state) {
      if (stateValueName === value) {
        const stateValue = this.state[stateValueName];
        this.setState({ [stateValueName]: stateValue + this.props.step });
      }
    }
  };
  countTotalFeedback() {
    return (Object.values(this.state).reduce((sum, current) => {
      return sum + current;
    }, 0));
  }
  countPositiveFeedbackPercentage() {
    return (Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    ));
  }

  render() {
    const totalVotes = this.countTotalFeedback();

    const PositiveVotes = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.buttonHandlers}
          ></FeedbackOptions>
        </Section>
        {isNaN(PositiveVotes) ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Section title="Statisics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalVotes}
              positivePercentage={PositiveVotes}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default App;
