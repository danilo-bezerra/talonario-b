import { Image, CheckBoxContainer, CheckBox } from "./styles";
import userDefault from "../../assets/user.png";
import { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import Page from "../../components/Page";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { UserContext } from "../../contexts/UserContext";
import { ActivityIndicator } from "react-native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoading } = useContext(UserContext);

  async function handleSubmit() {
    if (email && password) {
      await signIn(email, password);
    }
  }

  return (
    <Page>
      <Image source={userDefault} />
      <Input
        label="Email"
        placeholder="exemplo@mail.com"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <Input
        label="Senha"
        placeholder="*********"
        secureTextEntry={!showPassword}
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <CheckBoxContainer onPress={() => setShowPassword(!showPassword)}>
        <CheckBox toggleCheckBox={showPassword}>
          <Ionicons
            name={showPassword ? "checkmark-outline" : ""}
            size={18}
            color="#2f9"
          />
        </CheckBox>
        <Text size="">{showPassword ? "Ocultar Senha" : "Mostrar Senha"}</Text>
      </CheckBoxContainer>
      <Button onPress={handleSubmit}>
        {isLoading ? <ActivityIndicator size={20} color="#fff" /> : "Entrar"}
      </Button>
    </Page>
  );
}
