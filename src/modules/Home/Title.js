import React, { Component } from 'react';

const TITLES = [
  'A passionate front-end web developer',
  'An enthusiastic learner',
  'A team player'
]

class Title extends Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex });
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  render() {
    const title = TITLES[this.state.titleIndex];

    return(
      <span>{title}</span>
    )
  }
}

export default Title;