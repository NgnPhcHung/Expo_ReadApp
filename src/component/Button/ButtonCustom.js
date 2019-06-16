import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle}
        onPress={() => onPress()}
      >
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  buttonStyle: {
    padding: 18,
    backgroundColor: '#202646',
    borderRadius: 200,
    opacity: .9
  }
});

