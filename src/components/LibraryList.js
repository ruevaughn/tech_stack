import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return null;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);
