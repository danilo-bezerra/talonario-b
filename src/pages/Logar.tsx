import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { VStack, Heading, Icon, useTheme, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Suporte } from "./Suporte";
import { Alert } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function Logar() {
  const Stack = createNativeStackNavigator();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { signIn, isLoading } = useContext(UserContext);
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={4} pt={24}>
      <Image source={require("../assets/user.png")} width={100} height={100} />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon
            as={<Ionicons name={"mail"} color={colors.gray[300]} />}
            ml={4}
          />
        }
        onChangeText={setEmail}
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={
          <Icon
            as={<Ionicons name={"key"} color={colors.gray[300]} />}
            ml={4}
          />
        }
        secureTextEntry={showPassword}
        onChangeText={setPassword}
      />

      <Button
        title="Entrar"
        w="full"
        onPress={async () => {
          if (email && password) {
            await signIn(email, password);
          }
        }}
        isLoading={isLoading}
      />
    </VStack>
  );
}
