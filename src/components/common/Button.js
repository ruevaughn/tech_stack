import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
// TouchableOpacity - Treated like it's a View tag

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  // flex: 1 - expand to fill as much content as parent element allows
  // alignSelf - is a property 'type' of flexbox, says to stretch to fill
  //             the limits of the container.
  // alignSelf - 'center' - center the text inside button

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
