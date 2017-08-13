import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router style={{paddingTop: 65}}>
      <Scene jey="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Please login" initial/>
        </Scene>
        <Scene key="main">
          <Scene initial rightTitle="Add" onRight={()=> Actions.employeecreate()} key="employeelist" component={EmployeeList} title="Employees"/>
          <Scene key="employeecreate" component={EmployeeCreate} title="Create Employee"/>
          <Scene key="employeeedit" component={EmployeeEdit} title="Edit Employee"/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
