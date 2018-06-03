import axios from 'axios';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    PROFILE_NOT_FOUND,
    CLEAR_CURRENT_PROFILE,
    GET_ERRORS } from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios.get('/api/profile')
      .then(res => {
          dispatch({
             type: GET_PROFILE,
             payload: res.data
          });
      })
      .catch(err => {
          dispatch({
              type: GET_PROFILE,
              payload: {}
          });
      });
};

// Profile loading process
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
};
