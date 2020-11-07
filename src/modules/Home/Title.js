import React, { Component } from 'react';

const TITLES = [
  'A passionate front-end web developer',
  'An enthusiastic learner',
  'Enjoy working with team',
  'A creative designer and developer',
  'Highly motivated and flexible individual',
  'Love building beautiful web pages'
]

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000)
    this.animateTitles();
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });

      setTimeout(() => this.setState({ fadeIn: false }), 2000)

    }, 6000)
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  render() {
    const {fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return(
      <span className={fadeIn? 'title-fade-in' : 'title-fade-out'}>{title}</span>
    )
  }
}

export default Title;