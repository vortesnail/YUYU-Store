import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  SettledInWrapper,
} from './style';

class SettledIn extends Component {
  render() {
    return (
      <SettledInWrapper>
        <p>SettleIn Page</p>
      </SettledInWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettledIn);