import './App.css';
import Statistics from './components/Statistics/Statistics';
import Main from './components/Section/Main';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0
  }

  handleChangeStatistics = (e) => {
    this.setState(prev => {
      return {
        [e.target.name]: prev[e.target.name] + 1
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return total !== 0
      ? Math.round((good * 100) / total)
    : 0;
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Main>
        <Section title="Please leave feedback">
          <Container>
            <FeedbackOptions
            onChangeStatistics={this.handleChangeStatistics}
          />
          </Container>
        </Section>
          
        <Section title="Statistics">
          <Container>
            {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
            ) : (
            <Notification message="No feedback given" />
            )}
          </Container>          
        </Section>     
      </Main>
    );
  }
}

export default App;