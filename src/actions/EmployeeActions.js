import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS,EMPLOYEE_SAVE_SUCCESS} from './types'
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  }
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`).push({name, phone, shift}).then(() => {
      dispatch({type: EMPLOYEE_CREATE});
      //Actions.employeelist({type:'reset'})
      Actions.pop();

    });
  };
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({
        type: EMPLOYEE_FETCH_SUCCESS,
        payload : snapshot.val()
      });
    });
  };
};

export const employeesSave = ({name,phone,shift,uid}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set({name,phone,shift,uid})
    .then(()=>{
      dispatch({type: EMPLOYEE_SAVE_SUCCESS});
        Actions.pop();
    });
  };
};

export const employeeDelete = ({uid}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(()=>{
      console.log("employee well deleted");
      Actions.pop();
    });
  };
};
