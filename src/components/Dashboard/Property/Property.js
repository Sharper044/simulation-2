import React from 'react';
import { connect } from 'react-redux';
import { updatePropsList } from '../../../ducks/reducer';

function Property(props) {
  return(
    <div className='Property'>
      <img src={props.property.imgurl} alt={props.property.name} className='propImg'/>
      <div className='nameDesc'>
        <h6>{props.property.name}</h6>
        <p>{props.property.description}</p>
      </div>
      <div>
        <h6>Loan: ${props.property.loanammount}</h6>
        <h6>Monthly Mortgage: ${props.property.mortgagepayment}</h6>
        <h6>Recommended Rent: ${(props.property.mortgagepayment*1.25)}</h6>
        <h6>Desired Rent: ${props.property.rent}</h6>
        <h6>Address: {props.property.address}</h6>
        <h6>City: {props.property.city}</h6>
      </div>
      <img src='../../../../assets/delete_icon.png' alt='Delete property' className='deleteImg' onClick={() => this.props.updatePropsList( 'delete', props.property.id )}/>
    </div>
  );
}

export default connect(null, { updatePropsList })(Property);