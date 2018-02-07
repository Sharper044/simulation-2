import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel, updateImgURL } from '../../../ducks/reducer';
import Banner from '../../Banner/Banner';

class Wizard3 extends Component {
  constructor(props){
    super(props);

    this.state = {
      workingImgURL: this.props.imgURL,
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange( event ) {
    let value = event.target.value;

    this.setState({
      workingImgURL: value
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
          <p>Step 3</p>
          <div className='progressHolder'>
            <img src='../../../../assets/step_completed.png' alt='Step 1 completed'/>
            <img src='../../../../assets/step_completed.png' alt='Step 2 completed'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 3 active'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 4 inactive'/>
            <img src='../../../../assets/step_inactive.png' alt='Step 5 inactive'/>
          </div>
          <div className='inputHolder'>
            <img src={this.state.workingImgURL} alt='New property image' className='largeImg'/>
            <label for='propImgURL'>Image URL</label>
            <input type='text' id='propImgURL' name='workingImgURL' className='imgURLInput' onChange={ e => this.handleChange( e )}/>
          </div>
          <div>
            <Link to='/2'><button className='button dkgreen'>Previous Step</button></Link>
            <button className='button dkgreen' onClick={() => {
              this.props.updateImgURL( this.state.workingImgURL );
              this.props.history.push('http://localhost:3000/#/4');
            }}>Next Step</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    imgURL: state.imgURL
  }
}

export default connect(mapStateToProps, { cancel, updateImgURL })(Wizard3);