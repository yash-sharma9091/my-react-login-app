import React, { Component } from "react";
import "./Home.css";
import FormInput from 'react-input-validation';

export default class Validation extends Component {
  constructor () {
    super();
    this.state = {
      email: ''
    }
    this._onChangeValue = this._onChangeValue.bind(this)
    this.checkValidation = this.checkValidation.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  _onChangeValue (prop, param) {
      var state = {}
      state[param] = prop.prop
      this.setState(state)
    }

    checkValidation () {
      var error = false, btn_text;
      if (this._isAllValuesTrue(this.state)) {
         btn_text = 'Done!'
      } else {
         btn_text = 'Not Valid!'
        error = true
      }
      this.setState({
        error,
        btn_text
      })
    }

    _isAllValuesTrue (obj) {
      return Object.keys(obj).every(elem => (typeof obj[elem].isValid === 'function' && obj[elem].isValid() === true))
    }

    handleKeyPress (event) {
      if (event.charCode === 13) {
        this.checkValidation()
      }
    }
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>A simple note taking app</p>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3 col-sm-12'>
              <FormInput
                text='Email'
                emptyMessage='email is required'
                errorMessage='Not valid email'
                type='email'
                value={this.state.email || ''}
                onChange={prop => this._onChangeValue({prop}, 'email')}
                validateType='email'
                onKeyPress={this.handleKeyPress}
                />
            </div>
          </div>      
        </div>
      </div>
    );
  }
}