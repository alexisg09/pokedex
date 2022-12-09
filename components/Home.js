import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import style from '../styles/style';
import Informations from './Informations';
import Pokedex from './Pokedex';

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pokedex') {
            iconName = focused ? 'baseball' : 'baseball-outline';
          } else if (route.name === 'Informations') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: style.colors.secondary0,
        tabBarInactiveTintColor: style.colors.gray6,
        headerStyle: { backgroundColor: style.colors.primary0 },
        headerTitleStyle: {
          color: style.colors.white,
          textShadowRadius: 60,
          textShadowColor: style.colors.black,
        },
        tabBarStyle: {
          backgroundColor: style.colors.primary0,
          borderTopColor: style.colors.primary0,
        },
      })}>
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Informations" component={Informations} />
    </Tab.Navigator>
  );
}
