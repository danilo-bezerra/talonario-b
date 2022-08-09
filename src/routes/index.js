import React, { useContext, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { UserContext } from "../contexts/UserContext";
import { Logar } from '../pages/Logar';
import  Perfil  from "../pages/Perfil"
import Multar from "../pages/Multar"
import { Suporte } from "../pages/Suporte"
import HomeRoutes from "./HomeRoutes";
import { useTheme, Modal, FormControl, Input, Button } from 'native-base';
import SignOut from "../pages/SignOut"
export default function Routes() {
  const { user } = useContext(UserContext);
  const { colors } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const Drawer = createDrawerNavigator();
  
  return (
    <NavigationContainer>
    <>
    {user ? (
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.gray[500],
          },
          headerStyle: {
            backgroundColor: colors.gray[400],
          },
          headerTintColor: colors.gray[100],
          drawerActiveBackgroundColor: colors.green[500],
          drawerActiveTintColor: colors.gray[200],
          drawerInactiveTintColor: colors.gray[200],
        }}
      >
        <Drawer.Screen name="Home" component={HomeRoutes} />
        <Drawer.Screen name="Multar" component={Multar}/>
        <Drawer.Screen name="Perfil" component={Perfil}/>
        <Drawer.Screen name="Suporte" component={Suporte}/>
        <Drawer.Screen name="Sair" component={SignOut} />
       
      </Drawer.Navigator>
    ) : (
      <Logar />
    )}
  </>
  </NavigationContainer>
  );
}

