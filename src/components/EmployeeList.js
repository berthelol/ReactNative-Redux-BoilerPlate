import React , {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import EmployeeListItem from './EmployeeListItem';
import _ from 'lodash';

class EmployeeList extends Component{

  componentWillMount(){
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
    //next props are the the new set of props that will be render
    //this.props are still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({employees}){
    const ds =  new ListView.DataSource({
      rowHasChanged : (r1, r2) => r1!== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee){
    return <EmployeeListItem employee={employee}/>
  }
  render(){
    return (
      <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow}/>
    );
  }
}

const mapStateToProps = state =>{

  const employees = _.map(state.employees, (val,uid) => {
    return {...val,uid}; //{shift:'Monday',name:'Sarah',id:'Ndhud38833'};
  });
  return {employees};
}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);
