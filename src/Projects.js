import React from 'react';
import styled from 'styled-components'

const StyledProjects = styled.div`
  background: ${props => props.theme.secondaryDark};
`;

export default class Projects extends React.Component {
  state = {
    projectID: 'first'
  }

  render() {
    let id = this.state.projectID;
    switch (id) {
      case 'first':
        return (
          <StyledProjects>
            hello 
          </StyledProjects>
        );
      default:
        return <h2>kkk</h2>;
    }
  }
}
