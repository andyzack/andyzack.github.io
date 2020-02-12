import React, { Component } from 'react';
import SKILLS from './skills'

class Skill extends Component {
  render() {
    const { image, link } = this.props.skill;

    return(
      <a href={link}>
        <img
          src={image}
          className="aaz-icon-html5 w2 bg-black-30 br-100 b--dark-gray ba pa1 ma1"
          alt="HTML5"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
    )
  }
}

class Skills extends Component {
  render() {
    return(
      <div className="white">
        {
          SKILLS.map(SKILL => {
            return(
              <Skill key={SKILL.id} skill={SKILL} />
            )
          })
        }
      </div>
    )
  }
}

const Footer = () => (
<footer className="w-100 bg-black-60">
  <div className="mw8 w-100 center dt">
    <div className="tc db mt3">
      <Skills />
    </div>
    <div className="white-50 tc v-mid pa2">
    © 2020 Andrew Arokiaraj Zacharia
    </div>
  </div>
</footer>
);

export default Footer;