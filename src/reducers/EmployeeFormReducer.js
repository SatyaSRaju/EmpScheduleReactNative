import { EMPLOYEE_UPDATE, CLEAR_EMPLOYEE_FORM } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case EMPLOYEE_UPDATE:
        //Regular Implemenation
            // const newState ={}
            // newState[action.payload.prop] = action.payload.value
        //ES6 Key Interpolation [] as follow
        return { ...state, [action.payload.prop]: action.payload.value };

    case CLEAR_EMPLOYEE_FORM:
        return INITIAL_STATE;    
    default:
        return state;
  }  
};
