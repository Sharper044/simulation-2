import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cancel, updateNameDesc } from '../../../ducks/reducer';
import Banner from '../../Banner/Banner';

class Wizard1 extends Component {
  constructor(props){
    super(props);

    this.state = {
      workingName: this.props.name,
      workingDescription: this.props.description
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
            this.props.history.push('http://localhost:3000/#/dash');
          }}>cancel</button>
          </div>
          <p>Step 1</p>
          <div className='progressHolder'>
            <img src='../../../../assets/step_active.png' alt='Step 1 active'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 2 inactive'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 3 inactive'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 4 inactive'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 5 inactive'/>
          </div>
          <div className='inputHolder'>
            <label for='propName'>Property Name</label>
            <input type='text' id='propName' name='workingName' className='nameInput' onChange={ e => this.handleChange( e )}/>
            <label for='propDesc'>Property Name</label>
            <input type='text' id='propDesc' name='workingDescription' className='descInput' onChange={ e => this.handleChange( e )}/>
          </div>
          <button className='button dkgreen' onClick={() => {
            this.props.updateNameDesc( this.state.workingName, this.state.workingDescription );
            this.props.history.push('http://localhost:3000/#/2');
          }}>Next Step</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    name: state.name,
    description: state.description
  }
}

export default connect(mapStateToProps, { cancel, updateNameDesc })(Wizard1);