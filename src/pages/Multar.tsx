import { useState } from "react";
import { VStack, Heading, ScrollView, Icon } from "native-base";
import { Input } from "../components/Entrada"
import { Button } from "../components/Botao"
import { Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { InputErro } from "../components/EntradaErro";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Infracoes } from "./Infracoes"
 
  const Stack = createNativeStackNavigator();
 
  function Tela({navigation}){
    const [Placa, setPlaca] = useState("")
    const [Veiculo, setVeiculo] = useState("")
    const [Marca, setMarca] = useState("")
    const [Especie, setEspecie] = useState("")
    const [Cor, setCor] = useState("")
    const [erroCor, setErroCor] = useState(false)
    const [erroPlaca, setErroPlaca]= useState(false)
    const [erroVeiculo, setErroVeiculo] = useState(false)
    const [erroMarca, setErroMarca] = useState(false)
    const [erroEspecie, setErroEspecie] = useState(false)
    const [Erros,setErros]= useState(false)
    function Avancar(){
      setErroPlaca(false)
      setErroCor(false)
      setErroVeiculo(false)
      setErroMarca(false)
      setErroEspecie(false)
      setErros(false)
        if(Cor===""){
          setErroCor(true)
          setErros(true)
        }
        if(Placa===""){
          setErroPlaca(true)
          setErros(true)
        }
        if(Veiculo===""){
          setErroVeiculo(true)
          setErros(true)
        }
        if(Marca===""){
          setErroMarca(true)
          setErros(true)
        }
        if(Especie===""){
          setErroEspecie(true)
          setErros(true)
        }
      else if(Erros==false){
        navigation.navigate("Infracao")
      }
    }
    function ValidarPlaca(){
     
      const regex = /[A-Za-z]{3}-?[0-9][0-9A-Za-z][0-9]{2}/;
      if (regex.test(Placa)){
        setErroPlaca(false);
        Alert.alert("Certo")
      }else{
        setErroPlaca(true);
        Alert.alert("Erro","Placa Inválida")
      }
    }
    return(
      <VStack flex={1} alignItems="flex-start" bg="gray.600" px={2} >
        <ScrollView w="100%"> 
      <Heading color="gray.100" fontSize="13" mt={2} mb={1} > Placa</Heading>
      {erroPlaca?
      <InputErro placeholder="Placa" mb="4" value={Placa} onChangeText={(text)=>setPlaca(text)} />:
      <Input placeholder="Placa" mb="4" value={Placa} onChangeText={(text)=>setPlaca(text)}/>}
      <Button title="Consultar" w="full" mb="6" onPress={ValidarPlaca} />

      <Heading color="gray.100" fontSize="13" mt={2} mb={1} > Veículo</Heading>
      {erroVeiculo?
      <InputErro placeholder="Veiculo" mb="4" value={Veiculo} onChangeText={(text)=>setVeiculo(text)} />:
      <Input placeholder="Veiculo" mb="4" value={Veiculo} onChangeText={(text)=>setVeiculo(text)}/>}

      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Marca</Heading>
      {erroMarca?
      <InputErro placeholder="Marca" mb="4" value={Marca} onChangeText={(text)=>setMarca(text)} />:
      <Input placeholder="Marca" mb="4" value={Marca} onChangeText={(text)=>setMarca(text)}/>}

      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Espécie</Heading>
      {erroEspecie?
      <InputErro placeholder="Espécie" mb="4" value={Especie} onChangeText={(text)=>setEspecie(text)} />:
      <Input placeholder="Espécie" mb="4"  value={Especie} onChangeText={(text)=>setEspecie(text)}/>}

      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Cor</Heading>
      {erroCor?
      <InputErro placeholder="Cor" mb="4" value={Cor} onChangeText={(text)=>setCor(text)} />:
      <Input placeholder="Cor" mb="4"  value={Cor} onChangeText={(text)=>setCor(text)}/>}
   
    <Button mt="4" title="Prosseguir" w="full" onPress={Avancar}/>
    </ScrollView>
    </VStack>
    )
  }
  export default function Multar() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
    <Stack.Screen name="Tela"  component={Tela} />
    <Stack.Screen name="Infracao"  component={Infracoes} />
    
   </Stack.Navigator>
  );
}
