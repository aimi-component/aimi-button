import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AimiButton.scss';

class AimiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      buttonPrimary:this.props.primary,
      buttonDisable:this.props.disable,
      buttonAnimation:false,
      size:this.props.size
    };
  }

  render() {
    let classContent = `aimi-button ${this.state.size?`aimi-button-${this.state.size}`:''} ${this.state.buttonPrimary?' aimi-button--primary':''} ${this.state.buttonDisable?' aimi-button--disable':''}`
    return (
		  <button onClick={this.props.onClick} className={classContent}>{this.props.children}</button>
    );
  }
}

AimiButton.propTypes = {
	disable : PropTypes.bool,
  animation:PropTypes.bool,
  primary:PropTypes.bool,  
  value:PropTypes.bool,
  size:PropTypes.string,
  children:PropTypes.string,
  onClick:PropTypes.func
}

export default AimiButton;
