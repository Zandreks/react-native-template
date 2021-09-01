import { createReducer } from '@reduxjs/toolkit';
import axios from "axios";

/**
 * Constants
 */

export const userModule = 'user';
const SET_USER = `${userModule}/SET_USER`;
const LOADING = `${userModule}/LOADING`;
const LOADING_ECP = `${userModule}/LOADING_ECP`;
const CLEAR_STATE = `${userModule}/CLEAR_STATE`;

/**
 * Reducer
 */

const initialState = {
    loading: true,
    loadingEcp: false,
    data: [],
    profileData: {},
    permissions: [],
};

export default createReducer(initialState, {
    [SET_USER]: (state, action) => {
        state.data = action.payload
        state.loading = false;
        state.loadingEcp = false;
    },
    [LOADING]: (state, action) => {
        state.loading = !!action.payload;
    },
    [LOADING_ECP]: (state, action) => {
        state.loadingEcp = !!action.payload;
    },
    [CLEAR_STATE]: () => initialState,
});

/**
 * Actions
 */

export const getUsers = () => async (dispatch) => {
    dispatch({type:LOADING,payload:true})
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({type:SET_USER,payload: data})
    dispatch({type:LOADING,payload:false})

};
