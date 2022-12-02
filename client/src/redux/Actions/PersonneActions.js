import axios from 'axios';
import { toast } from 'react-toastify';

import {
  USER_LOADING,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  GET_ALL_PERSONS,
  EDIT_INSCRIPTION,
 
} from '../Constants/ActionTypes';
const env='http://localhost:4000'



//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};

// Register USer
export const registerUser = (formData) => async (dispatch) => {
  dispatch(userLoading());
  try {
    const res = await axios.post('/api/personne/register', formData);
    dispatch({
      type: REGISTER_USER,
      payload: res.data, 
    });
    toast(res.data.msg);
    dispatch(getAuthUser());
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => toast.error(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }
  }
};

export const getAuthUser = () => async (dispatch) => {
    dispatch(userLoading());
  
    try {
      //headers
      const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      const res = await axios.get('/api/personne/personne', config);
      dispatch({
        type: GET_AUTH_USER,
        payload: res.data, 
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
  export const logout = () => (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
    });
  };

// get all personnes
export const getAllPersonne = () => async (dispatch) => {
    try {
      const res = await axios.get(env+'/api/personne');
      console.log(res,'test')
      dispatch({
        type: GET_ALL_PERSONS,
        payload: res.data, 
      });
    } catch (error) {
      console.log(error);
  
      const { errors, msg } = error.response.data;
  
      if (Array.isArray(errors)) {
        errors.forEach((err) => toast.error(err.msg));
      }
      console.log(errors);
      if (msg) {
        alert(msg);
      }
    }
  };
  export const edituser = (idUser, editedUser) => async (dispatch) => {
    console.log(idUser);
   
    try {
      const res = await axios.put(env+`/api/personne/${idUser}`, editedUser);
      console.log(res);
      dispatch({
        type: EDIT_INSCRIPTION,
        payload: res.data, // { msg: 'user modified', useraftermodif }
      });
      toast(res.data.msg);
      
    } catch (error) {
      console.dir(error);
  
      const { errors, msg } = error.response.data;
  
      if (Array.isArray(errors)) {
        errors.forEach((err) => toast.error(err.msg));
      }
      console.log(errors);
      if (msg) {
        alert(msg);
      }
  
      dispatch({
        type: AUTH_ERRORS,
      });
    }
  };
  

