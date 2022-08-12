import { useState } from "react";
import {
  VStack,
  Heading,
  ScrollView,
  Icon,
  Text,
  HStack,
  Image,
  Pressable,
} from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { InputErro } from "../components/EntradaErro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Infracoes } from "./Infracoes";
import { Label } from "../components/Label";
import Camera from "./Camera";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Tela() {
  const [Placa, setPlaca] = useState("");
  const [Veiculo, setVeiculo] = useState("");
  const [Marca, setMarca] = useState("");
  const [Especie, setEspecie] = useState("");
  const [Cor, setCor] = useState("");
  const [erroCor, setErroCor] = useState(false);
  const [erroPlaca, setErroPlaca] = useState(false);
  const [erroVeiculo, setErroVeiculo] = useState(false);
  const [erroMarca, setErroMarca] = useState(false);
  const [erroEspecie, setErroEspecie] = useState(false);
  const [Erros, setErros] = useState(false);

  const [carImages, setCarImages] = useState({});

  const navigation = useNavigation();

  const handleCarImages = (newImage, id) => {
    setCarImages((l) => ({ ...l, [id]: newImage }));
  };

  function Avancar() {
    setErroPlaca(false);
    setErroCor(false);
    setErroVeiculo(false);
    setErroMarca(false);
    setErroEspecie(false);
    setErros(false);
    if (Cor === "") {
      setErroCor(true);
      setErros(true);
    }
    if (Placa === "") {
      setErroPlaca(true);
      setErros(true);
    }
    if (Veiculo === "") {
      setErroVeiculo(true);
      setErros(true);
    }
    if (Marca === "") {
      setErroMarca(true);
      setErros(true);
    }
    if (Especie === "") {
      setErroEspecie(true);
      setErros(true);
    } else if (Erros == false) {
      navigation.navigate("Infracao");
    }
  }
  function ValidarPlaca() {
    const regex = /[A-Za-z]{3}-?[0-9][0-9A-Za-z][0-9]{2}/;
    if (regex.test(Placa)) {
      setErroPlaca(false);
      Alert.alert("Certo");
    } else {
      setErroPlaca(true);
      Alert.alert("Erro", "Placa Inválida");
    }
  }
  return (
    <VStack flex={1} alignItems="flex-start" bg="gray.600" px={4}>
      <ScrollView w="100%">
        <Label>Imagens</Label>
        <HStack p={2} h={125} bg="gray.700" justifyContent="space-between">
          <Pressable
            flex={0.3}
            h="full"
            onPress={() =>
              navigation.navigate("camera", {
                handleCarImages,
                id: "img1",
              })
            }
          >
            <Image
              alt="image1"
              flex={1}
              source={
                carImages?.img1
                  ? { uri: carImages?.img1 }
                  : require("../assets/no-image.png")
              }
            />
          </Pressable>

          <Pressable
            flex={0.3}
            h="full"
            onPress={() =>
              navigation.navigate("camera", {
                handleCarImages,
                id: "img2",
              })
            }
          >
            <Image
              alt="image2"
              flex={1}
              resizeMode="cover"
              source={
                carImages?.img2
                  ? { uri: carImages?.img2 }
                  : require("../assets/no-image.png")
              }
            />
          </Pressable>
          <Pressable
            flex={0.3}
            h="full"
            onPress={() =>
              navigation.navigate("camera", {
                handleCarImages,
                id: "img3",
              })
            }
          >
            <Image
              alt="image3"
              flex={1}
              h="full"
              source={
                carImages?.img3
                  ? { uri: carImages?.img3 }
                  : require("../assets/no-image.png")
              }
            />
          </Pressable>
        </HStack>
        <HStack p={2} bg="gray.700" justifyContent="space-between">
          <Button
            title="Limpar"
            flex={0.3}
            h={8}
            p={0}
            onPress={() => handleCarImages(null, "img1")}
          />
          <Button
            title="Limpar"
            flex={0.3}
            h={8}
            p={0}
            onPress={() => handleCarImages(null, "img2")}
          />
          <Button
            title="Limpar"
            flex={0.3}
            h={8}
            p={0}
            onPress={() => handleCarImages(null, "img3")}
          />
        </HStack>

        <Label>Placa</Label>
        <Input
          error={erroPlaca}
          placeholder="Placa"
          mb="4"
          value={Placa}
          onChangeText={(text) => setPlaca(text)}
        />
        <Button title="Consultar" w="full" mb="6" onPress={ValidarPlaca} />

        <Label>Veículo</Label>
        <Input
          error={erroVeiculo}
          placeholder="Veiculo"
          mb="4"
          value={Veiculo}
          onChangeText={(text) => setVeiculo(text)}
        />

        <Label>Marca</Label>
        <Input
          error={erroMarca}
          placeholder="Marca"
          mb="4"
          value={Marca}
          onChangeText={(text) => setMarca(text)}
        />

        <Label>Espécie</Label>
        <Input
          error={erroEspecie}
          placeholder="Espécie"
          mb="4"
          value={Especie}
          onChangeText={(text) => setEspecie(text)}
        />

        <Label>Cor</Label>
        <Input
          error={erroCor}
          placeholder="Cor"
          mb="4"
          value={Cor}
          onChangeText={(text) => setCor(text)}
        />

        <Button title="Prosseguir" w="full" onPress={Avancar} my={4} />
      </ScrollView>
    </VStack>
  );
}
export default function Multar() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tela" component={Tela} />
      <Stack.Screen name="Infracao" component={Infracoes} />
      <Stack.Screen name="camera" component={Camera} />
    </Stack.Navigator>
  );
}
