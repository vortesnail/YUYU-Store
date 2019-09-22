import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SolutionWrapper,
} from './style';

class Solution extends Component {
  render() {
    return (
      <SolutionWrapper>
        <p>Solution Page</p>
      </SolutionWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Solution);