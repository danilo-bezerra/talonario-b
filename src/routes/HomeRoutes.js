import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Multar from "../pages/Multar";
import Dashboard from "../pages/Dashboard";
import Perfil from "../pages/Perfil";
import theme from "../assets/theme";
import { useTheme } from "native-base";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default () => {
  const { colors } = useTheme();

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
        tabBarActiveTintColor: colors.green[500],
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
