import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { AppContext } from '../contexts/AppContext';

const Form3Screen = ({ navigation }) => {
  const { dispatch } = useContext(AppContext);
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState({});

  // Function to handle the payment process
  const handlePayPress = async () => {
    // Check if card details are complete
    if (!cardDetails.complete) {
      Alert.alert('Error', 'Please enter complete card details');
      return;
    }

    try {
      // Confirm the payment with Stripe
      const { paymentIntent, error } = await confirmPayment('your-client-secret', {
        type: 'Card',
        billingDetails: { /* Add billing details here */ },
      });

      if (error) {
        // Show an alert if payment fails
        Alert.alert('Payment failed', error.message);
      } else if (paymentIntent) {
        // Show a success alert if payment is successful
        Alert.alert('Payment successful', 'Your payment was successful!');
        // Update the form state with card details
        dispatch({
          type: 'UPDATE_FORM',
          payload: { cardDetails },
        });
        // Navigate to the Profile screen
        navigation.navigate('Profile');
      }
    } catch (e) {
      // Show an alert if there's an error during the payment process
      Alert.alert('Payment error', e.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Card input field */}
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242', // Placeholder card number
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => setCardDetails(cardDetails)}
      />
      {/* Pay button */}
      <Button title="Pay" onPress={handlePayPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  card: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});

export default Form3Screen;
