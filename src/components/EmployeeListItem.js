import React, {Component} from 'react';
import {CardSection} from './common';
import {Text,TouchableWithoutFeedback,View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class EmployeeListItem extends Component{
  onRowPress(){
    Actions.employeeedit({employee:this.props.employee});
  }

  render(){
    const{name} = this.props.employee;
    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles={
  titleStyle:{
    paddingLeft:15,
    fontSize:18
  }
}

export default EmployeeListItem;
