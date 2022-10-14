import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import logo from './assets/favicon.png';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ListItem from './ListItem'
// Create a client

export default function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ListItem />
    </QueryClientProvider>
  );
}