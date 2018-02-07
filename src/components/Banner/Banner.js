import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../../ducks/reducer';

class Banner extends Component {
  render(){
    return(
      <header className='Banner'>
        <img src='../../../assets/header_logo.png' alt='Houser company logo' className='headerLogo'/>
        <h2><b>HOUSER</b> Dashboard</h2>
        <button onClick={() => {this.props.updateUser('logout')}} className='logoutButton'><Link to='/'>Logout</Link></button>
      </header>
    )
  }

}
export default connect(null, { updateUser })(Banner);