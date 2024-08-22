import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const CartScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);

  // Function to remove an item from the cart
  const removeItemFromCart = (index) => {
    const newCart = [...state.cart];
    newCart.splice(index, 1);
    dispatch({ type: 'UPDATE_CART', payload: newCart });
  };

  // Function to clear the cart and navigate to the payment details screen
  const clearCart = () => {
    dispatch({ type: 'UPDATE_CART', payload: [] });
    navigation.navigate('Payment details'); // Navigate to payment details screen
  };

  // Function to calculate the total price of items in the cart
  const getTotal = () => {
    return state.cart.reduce((total, item) => {
      // Ensure item.price is a string, default to '0' if undefined or null
      const price = (item.price && typeof item.price === 'string') ? item.price : '0';
      const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, '')); // Remove non-numeric characters
      return total + (isNaN(numericPrice) ? 0 : numericPrice);
    }, 0).toFixed(2); // Format total to 2 decimal places
  };

  return (
    <View style={styles.container}>
      {state.cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Oops, your cart is empty!</Text>
      ) : (
        <>
          <FlatList
            data={state.cart}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Button title="Remove" onPress={() => removeItemFromCart(index)} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text>Total: ZAR{getTotal()}</Text>
          <Button title="Checkout" onPress={clearCart} />
          <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  item: {
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
