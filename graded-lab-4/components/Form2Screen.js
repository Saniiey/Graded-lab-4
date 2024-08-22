import React, { useContext, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const Form2Screen = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleNext = () => {
    if (!address || !city || !stateName || !zipCode) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    dispatch({
      type: 'UPDATE_FORM',
      payload: { address, city, stateName, zipCode },
    });

    navigation.navigate('Form3');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Address"
        placeholderTextColor="black"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        placeholderTextColor="black"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="State"
        placeholderTextColor="black"
        value={stateName}
        onChangeText={setStateName}
        style={styles.input}
      />
      <TextInput
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor="black"
      />
      
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  input: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Form2Screen;
