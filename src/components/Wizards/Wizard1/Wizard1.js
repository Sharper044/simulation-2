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
            this.props.history.push('/dash');
          }}>cancel</button>
          </div>
          <p>Step 1</p>
          <div className='progressHolder'>
            <img src={require('../../../assets/step_active.png')} alt='Step 1 active'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 2 inactive'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 3 inactive'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 4 inactive'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 5 inactive'/>
          </div>
          <div className='inputHolder'>
            <label htmlFor='propName'>Property Name</label>
            <input type='text' id='propName' name='workingName' className='nameInput' value={this.state.workingName} onChange={ e => this.handleChange( e )}/>
            <label htmlFor='propDesc'>Property Description</label>
            <textarea type='text' id='propDesc' name='workingDescription' className='descInput' value={this.state.workingDescription} onChange={ e => this.handleChange( e )}/>
          </div>
          <button className='button dkgreen' onClick={() => {
            this.props.updateNameDesc( this.state.workingName, this.state.workingDescription );
            this.props.history.push('/2');
          }}>Next Step</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    name: state.reducer1.name,
    description: state.reducer1.description
  }
}

export default connect(mapStateToProps, { cancel, updateNameDesc })(Wizard1);