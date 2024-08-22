import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const Form1Screen = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }
    dispatch({ type: 'UPDATE_FORM', payload: { name, email, phone } });
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your name"
        placeholderTextColor="black"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter your phone number"
        placeholderTextColor="black"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <Button title="Save" onPress={handleSave} color="#28a745" />
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
});

export default Form1Screen;
