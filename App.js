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
import Ionicons from '@expo/vector-icons/Ionicons';



// Create a client


const App = () => {
  const queryClient = new QueryClient()

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();


  //   screenOptions = {{ headerStyle: { backgroundColor: '#31375b' }, headerTitleStyle: { color: '#ffffff' } }
  // }
  const Home = () => {

    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Pokédex') {
            iconName = focused
              ? 'baseball'
              : 'baseball-outline';
          } else if (route.name === 'Crédits') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#b2e1f7',
        tabBarInactiveTintColor: '#d6d6d6',
        headerStyle: { backgroundColor: '#31375b' },
        headerTitleStyle: { color: '#ffffff' },
        tabBarStyle: {
          backgroundColor: '#31375b',
          borderTopColor: '#31375b'
        }
      })}>
        <Tab.Screen name="Pokédex" component={ListItem} />
        <Tab.Screen name="Crédits" component={Informations} />
      </Tab.Navigator>
    )

  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#31375b' },
          headerTitleStyle: { color: '#ffffff' },
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Pokédex" component={ListItem} />
          <Stack.Screen name="Détails" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider >
  );
}

export default App;