import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {
  onEmailChange(text){
      this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {email,password} = this.props;
    this.props.loginUser({email,password})
  }
  renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    return(<Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="email" placeholder="email@gmail.com" value={this.props.email} onChangeText={this.onEmailChange.bind(this)}/>
        </CardSection>

        <CardSection>
          <Input label="password" secureTextEntry placeholder="password" value={this.props.password} onChangeText={this.onPasswordChange.bind(this)}/>
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles= {
  errorTextStyle:{
    fontSize:20,
    color:'red',
    alignSelf:'center'
  }
}
mapStateToProps = ({auth}) =>{
  const {email,password,error,loading} = auth;
  return{email,password,error,loading}
};
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);
