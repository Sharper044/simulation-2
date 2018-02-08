import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Property from './Property/Property';
import { connect } from 'react-redux';
import { updatePropList } from '../../ducks/reducer';
import { Link } from 'react-router-dom';

class Dashboard extends Component{
  constructor(props){
    super(props);

    this.state = {
      workingRent: 0
    }

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange( event ){
    let value = event.target.value;

    this.setState({
      workingRent: value
    });
  }

  componentDidMount(){
    this.props.updatePropList('get')
  }

  render(){
    let propertyList = (this.props.propList)?(this.props.propList.map( ( x, i ) => <Property property={ x } key={ i } />)):('Loading...')
    return(
      <div className='Dashboard'>
        <Banner/>

        <div className='DashLayout Center'>

          <Link to="/1"><button id='b1' className='button midgreen'>Add new property</button></Link>

          <div className='filterBox'>
            <label>List properties with "desired rent" greater than: $<input placeholder='0' type='text' value={this.state.workingRent} onChange={ event => this.handleChange( event )} className='rentInput'/></label>
            <button className='button midgreen' onClick={() => {
              this.props.updatePropList('filter', this.state.workingRent);
              this.setState({ workingRent: 0 });
            }}>Filter</button>
            <button className='button dkgreen' onClick={() => this.props.updatePropList('get')}>Reset</button>
          </div>

          <div className='dividerLine'></div>

          <div className='listBox'>
            <h3>Home Listings</h3>
            {propertyList}
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    propList: state.reducer1.propList
  }
}

export default connect( mapStateToProps, { updatePropList })( Dashboard );