import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  ContactWrapper,
} from './style';

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <p>Contact Page</p>
      </ContactWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);