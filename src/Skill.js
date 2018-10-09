import React from 'react';

class Skills extends React.Component {
  categories = {
  languages: ['HTML', 'CSS', 'Javascript'],
  frameworks: ['React', 'jQuery', 'Boostrap'],
  other: ['Git','Gulp','Sass']
  }

  render() {
    return(
      <div className="skills">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <div>
          {this.categories.languages.map(lang => <p>{lang}</p>)}
        </div>
        <h3>Frameworks/Libraries</h3>
        <div>
          {this.categories.frameworks.map(lang => <p>{lang}</p>)}
        </div>
        <h3>Other Technologies</h3>
        <div>
          {this.categories.other.map(lang => <p>{lang}</p>)}
        </div>
      </div>
    );
  }
}

export default Skills
