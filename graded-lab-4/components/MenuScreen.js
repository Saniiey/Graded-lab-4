import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { AppContext } from '../contexts/AppContext';

const MenuScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);

  const addItemToCart = (item) => {
    dispatch({ type: 'UPDATE_CART', payload: [...state.cart, item] });
    Alert.alert('Success', `${item.name} has been added to your cart.`);
  };

  const foodItems = [
    { id: '1', name: 'Pizza', description: 'Delicious cheese pizza with a crispy crust', price: 70 },
    { id: '2', name: 'Burger', description: 'Juicy beef burger with lettuce, tomato, and cheese', price: 55 },
    { id: '3', name: 'Coffee', description: 'Freshly brewed coffee', price: 35 },
    { id: '4', name: 'Chicken Nuggets', description: 'Crispy chicken nuggets with a side of dipping sauce', price: 45 },
    { id: '5', name: 'Salad', description: 'Fresh garden salad with a variety of vegetables', price: 30 },
    { id: '6', name: 'Pasta', description: 'Creamy Alfredo pasta with grilled chicken', price: 90 },
    { id: '7', name: 'Ice Cream', description: 'Vanilla ice cream with chocolate syrup', price: 20 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>ZAR {item.price.toFixed(2)}</Text>
            <Button title="Add to Cart" onPress={() => addItemToCart(item)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer} // Add spacing if needed
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
     backgroundColor: 'skyblue',
  },
  listContainer: {
    paddingBottom: 16, // Add padding to the bottom if needed
  },
  item: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});

export default MenuScreen;
