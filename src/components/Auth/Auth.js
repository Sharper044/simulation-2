import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';

class Auth extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      unField: '',
      pwField: '',
      loginFailed: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange( event ) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  register() {
    this.props.updateUser( 'register', {"username":this.state.unField, "password":this.state.pwField})
    this.setState({unField: '', pwField: ''}, this.props.history.push('http://localhost:3000/#/dash'));
  }

  login() {
    this.props.updateUser( 'login', {"username":this.state.unField, "password":this.state.pwField}).then( () => {
      if ( this.props.user.id === 0 || this.props.user.id === undefined ) {
        this.setState({unField: '', pwField: '', loginFailed: true})
      }
      else {
        this.setState({unField: '', pwField: '', loginFailed: false}, this.props.history.push('http://localhost:3000/#/dash'));
      }
    })
  }

  render() {
    <div className='Auth'>
      <div className='AuthLayout Center'>
        <img src='../../../assets/auth_logo.png' alt='Houser Company Logo' className='AuthLogo' />
        <div>
          <label for='username'>Username</label>
          <input type='text' id='username' className='homeInput' onChange={ e => this.handleChange( e )}/>
          <label for='password'>Password</label>
          <input type='password' id='password' className='homeInput' onChange={ e => this.handleChange( e )}/>
        </div>
        <div>
          <button className='button midgreen' id='login' onClick={() => this.login()}>Login</button>
          <button className='button dkgreen' id='register' onClick={() => this.register()}>Register</button>
        </div>
      </div>
    </div>
  }
}

function mapStateToProps( state ) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { updateUser })(Auth);