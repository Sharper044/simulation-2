import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel, updateFullAddress } from '../../../ducks/reducer';
import Banner from '../../Banner/Banner';

class Wizard2 extends Component {
  constructor(props){
    super(props);

    this.state = {
      workingAddress: this.props.address,
      workingCity: this.props.city,
      workingState: this.props.state,
      workingZip: this.props.zip
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange( event ) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div className='Wizard'>
        <Banner/>
        <div className='wizLayout Center'>
          <div className='wizName'>
            <h2>Add new listing</h2>
            <button className='button red' onClick={() => {
            this.props.cancel();
            this.props.history.push('/dash');
          }}>cancel</button>
          </div>
          <p>Step 2</p>
          <div className='progressHolder'>
            <img src={require('../../../assets/step_completed.png')} alt='Step 1 completed'/>
            <img src={require('../../../assets/step_active.png')} alt='Step 2 active'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 3 inactive'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 4 inactive'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 5 inactive'/>
          </div>
          <div className='inputHolder'>
            <label htmlFor='propAddress'>Address</label>
            <input type='text' id='propAddress' name='workingAddress' className='addressInput' value={this.state.workingAddress} onChange={ e => this.handleChange( e )}/>
            
            <label htmlFor='propCity'>City</label>
            <input type='text' id='propCity'  name='workingCity' className='smallInput' value={this.state.workingCity} onChange={ e => this.handleChange( e )}/>
            
            <label htmlFor='propState'>State</label>
            <input type='text' id='propState' name='workingState' className='smallInput' value={this.state.workingState} onChange={ e => this.handleChange( e )}/>
            
            <label htmlFor='propZip'>Zip</label>
            <input type='text' id='propZip' name='workingZip' className='smallInput' value={this.state.workingZip} onChange={ e => this.handleChange( e )}/>
          </div>
          <div>
            <Link to='/1'><button className='button dkgreen'>Previous Step</button></Link>
            <button className='button dkgreen' onClick={() => {
              this.props.updateFullAddress( this.state.workingAddress, this.state.workingCity, this.state.workingState, this.state.workingZip );
              this.props.history.push('/3');
            }}>Next Step</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    address: state.reducer1.address,
    city: state.reducer1.city,
    state: state.reducer1.state,
    zip: state.reducer1.zip
  }
}

export default connect(mapStateToProps, { cancel, updateFullAddress })(Wizard2);