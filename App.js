import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Informations from './components/Informations';
import PokemonDetails from './components/PokemonDetails';
import Pokedex from './components/Pokedex';
import style from './styles/style';

// Create a client

const App = () => {
  const queryClient = new QueryClient();

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Home = () => {
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
  };
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: style.colors.primary0 },
            headerTitleStyle: { color: style.colors.white },
          }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Pokedex" component={Pokedex} />
          <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
