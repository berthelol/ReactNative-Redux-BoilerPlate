import React, {Component} from 'react';
import {CardSection,Card,Button,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate,employeesSave,employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

  state={showModal:false};

  componentWillMount(){
    _.each(this.props.employee, (value,prop)=>{
      this.props.employeeUpdate({prop,value});
    });
  }
  onButtonPress(){
    const {name,phone,shift} = this.props;
    this.props.employeesSave({name,shift,phone,uid:this.props.employee.uid});
  }
  onTextPress(){
    const {name,phone,shift} = this.props;
    Communications.text(phone,`Hey ${name} your upcoming shift is on ${shift}`);
  }
  onFirePress(){
    this.setState({showModal:!this.state.showModal});
  }
  onAccept(){
    console.log("on Accept");
    const {uid} =  this.props.employee;
    this.props.employeeDelete({uid});
  }
  onDecline(){
    console.log("on Accept");
    this.setState({showModal:false});
  }

  render(){
    return(
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress.bind(this)}>Fire {this.props.name}</Button>
        </CardSection>

        <Confirm onAccept={this.onAccept.bind(this)} onDecline={this.onDecline.bind(this)} visible={this.state.showModal}>
          Are you sure you want to fire {this.props.name}?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) =>{
  const {name,phone,shift} = state.employeeForm;
  return {name,phone,shift};
}


export default connect(mapStateToProps,{employeesSave,employeeUpdate,employeeDelete})(EmployeeEdit);
