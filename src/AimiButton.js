import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AimiButton.scss';

class AimiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      buttonDisable:this.props.disable,
      buttonAnimation:false
    };
  }

  render() {
    return (
		<button className={`aimi-button${this.state.buttonDisable?' aimi-button--disable':''}`}>{this.props.children}</button>
    );
  }
}

AimiButton.propTypes = {
	buttonDisable : PropTypes.bool,
    buttonAnimation:PropTypes.bool,
    value:PropTypes.bool,
    children:PropTypes.string
}

export default AimiButton;
