import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const ProfileScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);
  const [textColorIndex, setTextColorIndex] = useState(0);
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const textColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#800080'];
  const backgroundColors = ['#ffa500', '#ffc0cb', '#a52a2a', '#808080', '#000000'];

  const updateTextColor = () => {
    const newIndex = (textColorIndex + 1) % textColors.length;
    setTextColorIndex(newIndex);
    dispatch({ type: 'UPDATE_THEME', payload: { ...state.theme, textColor: textColors[newIndex] } });
  };

  const updateBackgroundColor = () => {
    const newIndex = (backgroundColorIndex + 1) % backgroundColors.length;
    setBackgroundColorIndex(newIndex);
    dispatch({ type: 'UPDATE_THEME', payload: { ...state.theme, backgroundColor: backgroundColors[newIndex] } });
  };

  return (
    <View style={[styles.container, { backgroundColor: state.theme?.backgroundColor || 'skyblue' }]}>
      <View style={styles.detailsContainer}>
        <Text style={[styles.detailText, { color: state.theme?.textColor || '#000' }]}>Name: {state.formData?.name || 'Not provided'}</Text>
        <Text style={[styles.detailText, { color: state.theme?.textColor || '#000' }]}>Address: {state.formData?.address || 'Not provided'}</Text>
        <Text style={[styles.detailText, { color: state.theme?.textColor || '#000' }]}>Cell Phone Number: {state.formData?.phone || 'Not provided'}</Text>
      </View>

      <Button title="Change Text Color" onPress={updateTextColor} color="#28a745" />
      <Button title="Change Background Color" onPress={updateBackgroundColor} color="#dc3545" />
      
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Menu')}
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
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
  nextButton: {
    backgroundColor: '#0000ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
