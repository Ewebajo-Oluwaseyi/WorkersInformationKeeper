import {
    GET_INFORMATIONS,
    ADD_INFORMATIONS,
    INFORMATION_ERROR,
    FILTER_INFORMATIONS,
    CLEAR_FILTER,
    CLEAR_INFORMATIONS
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case GET_INFORMATIONS: 
            return{
                ...state,
                informations: action.payload,
                loading: false
            }
        case ADD_INFORMATIONS:
            return{
                ...state,
                informations: [action.payload, ...state.informations],
                loading: false
            };
        
        case CLEAR_INFORMATIONS:
            return{
                ...state,
                informations: null,
                filter: null,
                error: null,
                current: null
            }
        
        case FILTER_INFORMATIONS: 
            return{
                ...state,
                filter: state.informations.filter(information =>{ 
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return information.name.match(regex) || information.email.match(regex);
                })
            };
        case CLEAR_FILTER:
            return{
                ...state,
                filter: null
                }
        case INFORMATION_ERROR: 
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};