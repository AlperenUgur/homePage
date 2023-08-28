import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeScreen from './pages/EmployeeScreen';
import PasswordScreen from './pages/PasswordScreen';
import HomeScreen from './pages/HomeScreen';
import DataSheetScreen from './pages/DataSheetScreen';
import KnowHowScreen from './pages/KnowHowScreen';
import CalenderScreen from './pages/CalenderScreen';
import BuyScreen from './pages/BuyScreen';
import BuyRequestScreen from './pages/BuyRequestScreen';
import EnvanterScreen from './pages/EnvanterScreen';
import Login from './login/Login';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="Personel ekranı" component={EmployeeScreen} />
            <Drawer.Screen name="Şifre yönetimi" component={PasswordScreen} />
            <Drawer.Screen name="Datasheet ekranı" component={DataSheetScreen} />
            <Drawer.Screen name="Know-how ekranı" component={KnowHowScreen} />
            <Drawer.Screen name="Takvim" component={CalenderScreen} />
            <Drawer.Screen name="Satın alma ekranı" component={BuyScreen} />
            <Drawer.Screen
              name="Satın alma istek ekranı"
              component={BuyRequestScreen}
            />
            <Drawer.Screen name="Envanter" component={EnvanterScreen} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {props => (
                <Login
                  {...props}
                  onLogin={handleLogin} // Giriş yapıldığında ana bileşen durumunu güncelliyoruz
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
