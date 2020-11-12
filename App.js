import React from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import PeoplePage  from './src/pages/PeoplePage'
const Stack = createStackNavigator();

function App(){
  return(
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PeoplePage">
          <Stack.Screen name="Lista com atributos de motos" component={PeoplePage} />
          <Stack.Screen name="Informações" component={PeopleDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#696969' 
    }
  }
)

export default App;
