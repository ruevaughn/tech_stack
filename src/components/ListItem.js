import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    console.log(this.props);

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.item.title}
        </Text>
      </ CardSection >
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  viewStyle: {
    flex: 1
  }
};

// connect helper from redux modifies what data shows up as props.
// the first argument is always MapStateToProps if you are wanting it
// null if not
export default connect(null, actions)(ListItem);
