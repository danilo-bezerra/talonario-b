import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Multar from "../pages/Multar";
import Dashboard from "../pages/Dashboard";
import  Perfil  from "../pages/Perfil";
import theme from "../assets/theme";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = "home-outline";
          } else if (route.name === "Multar") {
            iconName = "car-outline";
          } else if (route.name === "Perfil") {
            iconName = "person";
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.textActive,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.bgPrimary,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Multar" component={Multar} />
      <Tab.Screen name="Perfil" component={Perfil} />
      
    </Tab.Navigator>
   
  );
};
