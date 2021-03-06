import React from 'react';
import {TextInput,View,Text} from 'react-native';

const Input = ({label,value,onChangeText,placeHolder,secureTextEntry}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput secureTextEntry={secureTextEntry} autoCorrect={false} placeholder={placeHolder} style={styles.inputStyle} value={value} onChangeText={onChangeText} />
    </View>
  );
};

const styles = {
  inputStyle : {
    color : "#000",
    paddingRight:5,
    paddingLeft:5,
    fontSize:15,
    lineHeight:23,
    flex:2
  },
  labelStyle:{
    fontSize:15,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:"row",
    alignItems:'center'
  }
}
export {Input};
