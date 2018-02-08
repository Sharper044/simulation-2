import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancel, updateLoanMortgage } from '../../../ducks/reducer';
import Banner from '../../Banner/Banner';

class Wizard4 extends Component {
  constructor(props){
    super(props);

    this.state = {
      workingloanAmmount: this.props.loanAmmount,
      workingmortgagePayment: this.props.mortgagePayment,
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
          <p>Step 4</p>
          <div className='progressHolder'>
            <img src={require('../../../assets/step_completed.png')} alt='Step 1 completed'/>
            <img src={require('../../../assets/step_completed.png')} alt='Step 2 completed'/>
            <img src={require('../../../assets/step_completed.png')} alt='Step 3 completed'/>
            <img src={require('../../../assets/step_active.png')} alt='Step 4 active'/>
            <img src={require('../../../assets/step_inactive.png')} alt='Step 5 inactive'/>
          </div>
          <div className='inputHolder'>
            <label htmlFor='proploanAmmount'>Loan Ammount</label>
            <input type='text' id='proploanAmmount' name='workingloanAmmount' className='loanAmmountInput' value={this.state.workingloanAmmount} onChange={ e => this.handleChange( e )}/>
            
            <label htmlFor='propmortgagePayment'>Monthly Mortgage Payment</label>
            <input type='text' id='propmortgagePayment'  name='workingmortgagePayment' className='loanAmmountInput' value={this.state.workingmortgagePayment} onChange={ e => this.handleChange( e )}/>
          </div>
          <div>
            <Link to='/3'><button className='button dkgreen'>Previous Step</button></Link>
            <button className='button dkgreen' onClick={() => {
              this.props.updateLoanMortgage( this.state.workingloanAmmount, this.state.workingmortgagePayment);
              this.props.history.push('/5');
            }}>Next Step</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( state ){
  return {
    loanAmmount: state.reducer1.loanAmmount,
    mortgagePayment: state.reducer1.mortgagePayment
  }
}

export default connect(mapStateToProps, { cancel, updateLoanMortgage })(Wizard4);