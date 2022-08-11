import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";

import { Alert, StyleSheet } from "react-native";
import {
  VStack,
  Heading,
  Icon,
  useTheme,
  FlatList,
  Text,
  Modal,
  ScrollView,
} from "native-base";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { Ionicons } from "@expo/vector-icons";

import { getDate } from "../utils/getDate";
import { getLocation } from "../utils/getLocation";

import results from "../assets/infracoes.json";
import { Label } from "../components/Label";
import { MapViewer } from "../components/MapView";

const ReloadButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  border-radius: 18px;
  position: absolute;
  top: 15px;
  right: 8px;
  align-items: center;
  justify-content: center;
`;

export function Infracoes() {
  const [inputAddress, setInputAddress] = useState("");
  const [infra, setInfra] = useState("");
  const [list, setList] = useState(results);
  const [showModal, setShowModal] = useState(false);
  const [showModalLocal, setShowModalLocal] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const [reload, setReload] = useState(false);
  const [originalData, setOriginalData] = useState(results);

  const { currentHour, currentDate } = getDate();
  const { latitude, longitude, address } = getLocation();

  const { colors } = useTheme();

  function renderPost(item) {
    const temp = `${item.artigo} | ${item.codigo} - ${item.desob} \n${item.descricao}`;

    return (
      <Text
        bg="gray.400"
        color="white"
        px={2}
        py={4}
        mb={2}
        borderRadius={4}
        borderColor={colors.green[300]}
        borderBottomWidth={1}
        onPress={() => setInfra(temp)}
      >
        {temp}
      </Text>
    );
  }

  function search(s) {
    let ar = JSON.parse(JSON.stringify(originalData));

    setList(
      ar.filter(
        (d) =>
          d.descricao.toLowerCase().includes(s.toLowerCase()) ||
          d.artigo.includes(s) ||
          d.codigo.includes(s)
      )
    );
  }

  return (
    <VStack flex={1} alignItems="flex-start" bg="gray.600" p={4}>
      <Label>Infração</Label>
      <Input
        my={4}
        h={100}
        multiline
        textAlignVertical="top"
        value={infra}
        onChangeText={(s) => {
          search(s), setInfra(s);
        }}
      />

      <FlatList
        data={list}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => String(item.id)}
      />

      <Button
        mt="4"
        title="Continuar"
        mb="2"
        w="full"
        onPress={() => setShowModalLocal(true)}
      />

      <Modal
        isOpen={showModalLocal}
        px={"2"}
        w="full"
        size="full"
        alignItems={"flex-start"}
        backgroundColor={"gray.600"}
      >
        <ScrollView w={"full"}>
          <Label fontSize="xl" mt={6} mb={6}>
            Localização
          </Label>
          <MapViewer />
          <Text color={"white"}>Data: {currentDate}</Text>
          <Text color={"white"}>Hora: {currentHour}</Text>
          <Label>Endereço:</Label>

          <Input
            mt={2}
            mb={4}
            h={100}
            multiline
            textAlignVertical="top"
            value={inputAddress || address}
            onChangeText={(s) => setInputAddress(s)}
          />

          <ReloadButton onPress={() => setReload((v) => !v)}>
            <Ionicons name="reload-outline" size={36} color={"gray"} />
          </ReloadButton>

          <Button
            mb={4}
            w={"full"}
            onPress={() => setShowModal(true)}
            title={"Continuar"}
          />
          <Button
            mb={4}
            w={"full"}
            onPress={() => setShowModalLocal(false)}
            title={"Voltar"}
          />
        </ScrollView>
      </Modal>

      <Modal
        isOpen={showModal}
        px={"3"}
        size="full"
        alignItems={"flex-start"}
        backgroundColor={"gray.600"}
        safeAreaTop={true}
      >
        <Modal.Content
          backgroundColor={"gray.600"}
          marginBottom={"auto"}
          marginTop={"0"}
        >
          <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
            Enviar Multa
          </Heading>
          <Label mb={2}>Observação</Label>
          <Input
            placeholder="Observação..."
            multiline
            h={150}
            textAlignVertical="top"
            InputLeftElement={
              <Icon
                as={
                  <Ionicons name={"reader-outline"} color={colors.gray[300]} />
                }
                ml={4}
              />
            }
            mb={4}
          />
          <Label mb={2}>Senha</Label>
          <Input
            placeholder="Senha:"
            secureTextEntry={showPass}
            InputLeftElement={
              <Icon
                as={<Ionicons name={"key"} color={colors.gray[300]} />}
                ml={4}
              />
            }
            mb={4}
          />
          <Button
            mb={4}
            w={"full"}
            onPress={() => Alert.alert("Sucesso", "Multa Enviada.")}
            title={"Enviar"}
          />
          <Button
            mb={4}
            w={"full"}
            onPress={() => setShowModal(false)}
            title={"Cancelar"}
          />
        </Modal.Content>
      </Modal>
    </VStack>
  );
}
