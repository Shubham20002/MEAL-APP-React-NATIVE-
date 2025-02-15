import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailSceen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

export default function App() {
  const Stack=createNativeStackNavigator()
  const Drawer = createDrawerNavigator();
  
  
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle:{backgroundColor:"#351401"},
        drawerInactiveTintColor:"white",
        drawerActiveBackgroundColor:"#e4baa1"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}/>
    </Drawer.Navigator>
  );
}
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#351401'},
        headerTintColor:'white',
        contentStyle:{backgroundColor:'#3f2f25'}
      }}>
       <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
        <Stack.Screen name='MealDetails' component={MealDetailSceen}/>
      </Stack.Navigator>

    
  
    </NavigationContainer>
  
    </>
  );
}

const styles = StyleSheet.create({
 
});
