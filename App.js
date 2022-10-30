import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import FactionScreen from './screens/FactionScreen';
import RacesScreen from './screens/RacesScreen';
import RaceDetailScreen from './screens/RaceDetailScreen';

import Colors from './utilities/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <NavigationContainer>
        <StatusBar style='light' />
        <Stack.Navigator
          screenOptions={{
            title: 'Home',
            headerStyle: { backgroundColor: Colors.primaryOrange },
            headerTintColor: Colors.primaryBrown,
          }}
        >
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{
              title: 'Home',
              headerStyle: { backgroundColor: Colors.primaryBrown },
            }}
          />
          <Stack.Screen
            name='Factions'
            component={FactionScreen}
            options={{
              title: 'Factions',
            }}
          />
          <Stack.Screen
            name='Races'
            component={RacesScreen}
            options={{ title: 'Races' }}
          />
          <Stack.Screen
            name='RaceDetails'
            component={RaceDetailScreen}
            options={{ title: 'Race Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
