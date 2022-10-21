import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ListItem from './ListItem'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemDetails from './ItemDetails';
import Informations from './Informations';
import { createStackNavigator } from '@react-navigation/stack';


// Create a client


const App = () => {
  const queryClient = new QueryClient()

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Home = () => {

    return (
      <Tab.Navigator>
        <Tab.Screen name="Pokédex" component={ListItem} />
        <Tab.Screen name="Crédits" component={Informations} />
      </Tab.Navigator>
    )

  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ListItem} />
          <Stack.Screen name="Détails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;