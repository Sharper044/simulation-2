import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import '../../reset.css';
import './Auth.css';

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
    this.setState({unField: '', pwField: ''}, this.props.history.push('/dash'));
  }

  login() {
    this.props.updateUser( 'login', {"username":this.state.unField, "password":this.state.pwField}).then( () => {
      if ( this.props.user.id === 0 || this.props.user.id === undefined ) {
        this.setState({unField: '', pwField: '', loginFailed: true})
      }
      else {
        this.setState({unField: '', pwField: '', loginFailed: false}, () => this.props.history.push('/dash'));
      }
    })
  }

  render() {
    return(
      <div className='Auth'>
        <div className='AuthLayout Center'>
          <img src={require('../../assets/auth_logo.png')} alt='Houser Company Logo' className='AuthLogo' />
          <div className='inputHolder'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' className='homeInput' name='unField' onChange={ e => this.handleChange( e )}/>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' className='homeInput' name='pwField' onChange={ e => this.handleChange( e )}/>
          </div>
          <div id='AuthButtons'>
            <button className='button midgreen' id='login' onClick={() => this.login()}>Login</button>
            <button className='button dkgreen' id='register' onClick={() => this.register()}>Register</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    user: state.reducer1.user
  }
}

export default connect(mapStateToProps, { updateUser })(Auth);