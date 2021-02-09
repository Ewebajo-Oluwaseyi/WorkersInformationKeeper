import React, { useReducer } from 'react';
import InformationContext from './informationContext';
import InformationReducer from './informationReducer';
import axios from 'axios'
import {
    GET_INFORMATIONS,
    ADD_INFORMATIONS,
    INFORMATION_ERROR,
    CLEAR_INFORMATIONS,
    FILTER_INFORMATIONS,
    CLEAR_FILTER,
} from '../types';

const InformationState = props => {
    const initialState = {
        informations: null,
        filter: null,
        error: null
    }

    const[state, dispatch] = useReducer(InformationReducer, initialState);

    //get informations
    const getInformation = async() => {
        
        try {
            const res = await axios.get('/api/Information');
            dispatch({
                type: GET_INFORMATIONS, payload: res.data
            });
        } catch (err) {
            dispatch({
                type: INFORMATION_ERROR, payload: err.response.msg
            }) 
        }
        
    }


    //add information
    const addInformation = async information => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/Information', information, config);
            dispatch({
                type: ADD_INFORMATIONS, payload: res.data
            });
        } catch (err) {
            dispatch({
                type: INFORMATION_ERROR, payload: err.response.msg
            }) 
        }
        
    }



    //filter information
    const filterInformation = text => {
        dispatch({
            type: FILTER_INFORMATIONS, payload: text
        });
    } 

    //clear Filter
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        });
    } 

    //clear Information
    const clearInformation = () => {
            dispatch({
                type: CLEAR_INFORMATIONS 
            });
    }

    return( 
        <InformationContext.Provider
        value={{
            informations: state.informations,
            current: state.current,
            filter: state.filter,
            error: state.error,
            loading: state.loading,
            addInformation,
            filterInformation,
            clearFilter,
            getInformation,
            clearInformation
        }}>
            {props.children}
        </InformationContext.Provider>
    )
};

export default InformationState;