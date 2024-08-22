import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { AppProvider } from './contexts/AppContext';
import MenuScreen from './components/MenuScreen';
import CartScreen from './components/CartScreen';
import ProfileScreen from './components/ProfileScreen';
import Form1Screen from './components/Form1Screen';
import Form2Screen from './components/Form2Screen';
import Form3Screen from './components/Form3Screen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Menu':
                  iconName = 'restaurant'; 
                  break;
                case 'Cart':
                  iconName = 'cart'; 
                  break;
                case 'Profile':
                  iconName = 'person'; 
                  break;
                case 'User details':
                  iconName = 'person-outline'; 
                  break;
                case 'Address details':
                  iconName = 'map'; 
                  break;
                case 'Payment details':
                  iconName = 'card'; 
                  break;
                default:
                  iconName = 'home';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
        <Tab.Screen name="User details" component={Form1Screen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
           <Tab.Screen name="Address details" component={Form2Screen} />
          <Tab.Screen name="Payment details" component={Form3Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
