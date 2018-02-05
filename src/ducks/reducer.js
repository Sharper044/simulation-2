import * as service from './serviceList';

const initialState = {
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  imgURL: '',
  loanAmmount: 0,
  mortgagePayment: 0,
  rent: 0,
  propList: [],
  user: {},
  loading: false
}

//Switch state string to variables
const UPDATE_NAME_DESC = 'UPDATE_NAME_DESC';
const UPDATE_FULL_ADDRESS = 'UPDATE_FULL_ADDRESS';
const UPDATE_IMG_URL = 'UPDATE_IMG_URL';
const UPDATE_LOAN_MORTGAGE = 'UPDATE_LOAN_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const UPDATE_PROP_LIST = 'UPDATE_PROP_LIST';
const UPDATE_PROP_LIST_PENDING = 'UPDATE_PROP_LIST_PENDING';
const UPDATE_PROP_LIST_FULFILLED = 'UPDATE_PROP_LIST_FULFILLED';
const UPDATE_USER = 'UPDATE_USER';
const UPDATE_USER_PENDING = 'UPDATE_USER_PENDING';
const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED';

//Reducer function
function reducer( state = initialState, action ){
  switch( action.type ){
    case UPDATE_PROP_LIST_PENDING:
      return Object.assign({}, state, { loading:true });
    
    case UPDATE_PROP_LIST_FULFILLED:
      return Object.assign({}, state, {loading: false, propList: action.payload});

    case UPDATE_USER_PENDING:
      return Object.assign({}, state, { loading:true });

    case UPDATE_USER_FULFILLED:
      return Object.assign({}, state, {loading: false, user: action.payload});

    case UPDATE_NAME_DESC:
      return Object.assign({}, state, {name: action.payload[0], description: action.payload[1]});

    case UPDATE_FULL_ADDRESS:
      return Object.assign({}, state, {address: action.payload[0], city: action.payload[1], state: action.payload[2], zip: action.payload[3]});

    case UPDATE_IMG_URL:
      return Object.assign({}, state, {imgURL: action.payload});

    case UPDATE_LOAN_MORTGAGE:
      return Object.assign({}, state, {loanAmmount: action.payload[0], mortgagePayment: action.payload[1]});

    case UPDATE_RENT:
      return Object.assign({}, state, {rent: action.payload});

    default:
      return state;
  }
}

//action creator functions
export function updatePropList( command, info ){
  return {
    type: UPDATE_PROP_LIST,
    payload: service.updatePropList( command, info )
  }
}

export function updateUser( command, body ){
  return {
    type: UPDATE_USER,
    payload: service.updateUser( command, body )
  }
}

export function updateNameDesc( name, desc ){
  return {
    type: UPDATE_NAME_DESC,
    payload: [ name, desc ]
  }
}

export function updateFullAddress( address, city, state, zip ){
  return {
    type: UPDATE_FULL_ADDRESS,
    payload: [ address, city, state, zip ]
  }
}

export function updateImgURL( imgURL ){
  return {
    type: UPDATE_IMG_URL,
    payload: imgURL
  }
}

export function updateLoanMortgage( loanAmmount, mortgagePayment ){
  return {
    type: UPDATE_LOAN_MORTGAGE,
    payload: [ loanAmmount, mortgagePayment ]
  }
}

export function updateRent( rent ){
  return {
    type: UPDATE_RENT,
    payload: rent
  }
}

export default reducer;