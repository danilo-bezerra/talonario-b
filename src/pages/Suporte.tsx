import { useState } from "react";
import { Alert } from "react-native";
import { VStack, Heading, useTheme, Icon, TextArea, Modal } from "native-base";
import React from "react";
import { Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { AreaText } from "../components/AreaText";
export function Suporte() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { colors } = useTheme();
  let URL = "https://api.whatsapp.com/send?phone=5588992603392&text=Nome: ";

  return (
    <VStack flex={1} alignItems="flex-start" bg="gray.600" px={8} pt={15}>
      <Input
        mb={4}
        placeholder="Nome Completo"
        onChangeText={setName}
        InputLeftElement={
          <Icon
            as={<Ionicons name={"person"} color={colors.gray[300]} />}
            ml={4}
          />
        }
      />
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

      <AreaText placeholder={"Mensagem"} mb={4} onChangeText={setMessage} />
      <Modal
        isOpen={showModal}
        marginTop={0}
        marginBottom={"auto"}
        safeAreaTop={true}
      >
        <Button
          mb={4}
          onPress={() =>
            Linking.openURL(
              URL + name + "\nEmail: " + email + "\nMensagem: " + message
            )
          }
          title={"WhatsApp"}
          w={"50%"}
        />
        <Button
          onPress={() =>
            Linking.openURL(
              "mailto:brenobrito984@gmail.com?subject=Suporte Talonario&body=" +
                name +
                "\nEmail: " +
                email +
                "\nMensagem: " +
                message
            )
          }
          title={"E-mail"}
          mb={4}
          w={"40%"}
        />
        <Button
          mb={4}
          onPress={() => setShowModal(false)}
          title={"Cancelar"}
          w={"30%"}
        />
      </Modal>
      <Button
        mb={4}
        onPress={() => setShowModal(true)}
        title={"Entrar em Contato "}
        w={"full"}
      />
    </VStack>
  );
}
