import axios from 'axios';
import URL from '../api';

export function updatePropList(command, info){
  switch( command ){
    case 'filter':
      return axios.get( `${URL.getProps}?rentFilter=${info}`).then( res => res.data );
    case 'create':
      return axios.post( URL.createNew, info ).then( res => res.data);
    case 'delete':
      return axios.delete( `${URL.delete}:${info}` ).then( res => res.data );
    default:
      return axios.get( URL.getProps ).then( res => res.data );
  }
}

export function updateUser( command, body ){
  switch( command ){
    case 'login':
      return axios.post( URL.login, body ).then( res => res.data );
    case 'register':
      return axios.post( URL.register, body ).then( res => res.data );
    default:
      return axios.post( URL.delete ).then( res => res.data );
  }
}
