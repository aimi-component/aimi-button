import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './AimiButton.scss';

class AimiButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      buttonPrimary:this.props.primary,
      buttonDisable:this.props.disable,
      buttonAnimation:false,
      size:this.props.size,

    };
  }

  handleClick = () =>{

  }

  render() {
    let rippleAnime = classNames('aimi-button--ripple',{'aimi-button--ripple-hide':!this.state.buttonAnimation},{'aimi-button--ripple-anime':this.state.buttonAnimation})
    let classContent = classNames('aimi-button',
                                this.state.size?`aimi-button-${this.state.size}`:'',
                                this.state.buttonPrimary?'aimi-button--primary':'',this.state.buttonDisable?' aimi-button--disable':'')
    return (
      <a onClick={this.props.onClick} className={`aimi-button--content ${this.props.className?this.props.className:''}`}>
        <button ref={this.refCallback} onClick={this.handleClick} className={classContent}>
          <span>{this.props.children}</span>
        </button>
      </a>
		  
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
  className:PropTypes.string,
  onClick:PropTypes.func
}

export default AimiButton;
