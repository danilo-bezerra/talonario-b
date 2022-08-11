import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { UserContextProvider } from "./src/contexts/UserContext";
import { THEME } from './src/assets/tema';
import { Loading } from './src/components/Loading';
import "react-native-gesture-handler";
import Routes from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  
  return (
    
    <NativeBaseProvider theme={THEME}>
      <UserContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      {fontsLoaded ? <Routes /> : <Loading />}
      </UserContextProvider>
    </NativeBaseProvider>
   
  );
}