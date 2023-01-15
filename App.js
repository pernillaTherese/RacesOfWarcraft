import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './screens/MainScreen';
import FactionScreen from './screens/FactionScreen';
import RacesScreen from './screens/RacesScreen';
import RaceDetailScreen from './screens/RaceDetailScreen';

import colors from './utilities/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' />
      <NavigationContainer>
        <Stack.Navigator
          name='Home'
          screenOptions={{
            headerStyle: { backgroundColor: colors.primaryBrown },
            headerTintColor: colors.textLight,
            headerTitleStyle: { fontWeight: 'light' },
          }}
        >
          <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{
              headerShown: false,
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
    </>
  );
}
