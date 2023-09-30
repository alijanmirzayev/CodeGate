import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Loading from './src/components/Loading';
import RootStack from './src/navigations/Root';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <PaperProvider>
          <RootStack />
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}