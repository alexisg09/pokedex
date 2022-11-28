import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './components/Home';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import style from './styles/style';

// Create a client

const App = () => {
  const queryClient = new QueryClient();

  const Stack = createStackNavigator();

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
