import { useState } from "react";
import { apiConsultaPlaca } from "../services/api";
import { VStack, Heading, ScrollView } from "native-base";
import { Input } from "../components/Entrada"
import { Button } from "../components/Botao"
import { Alert } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Infracoes } from "./Infracoes"
 
  const Stack = createNativeStackNavigator();
 
  function Tela({navigation}){
    const [Placa, setPlaca] = useState("")
    const [erroPlaca, setErroPlaca]= useState(false)
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
      <Input placeholder="Placa" mb="4" onChangeText={(text)=>setPlaca(text)}/>
      <Button title="Consultar" w="full" mb="6" onPress={ValidarPlaca} />
      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Veículo</Heading>
      <Input  placeholder="Veículo" mb="4"/>
      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Marca</Heading>
      <Input placeholder="Marca" mb="4"/>
      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Espécie</Heading>
      <Input placeholder="Espécie" mb="4"/>
      <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Cor</Heading>
      <Input placeholder="Cor" mb="4"/>
   
    <Button mt="4" title="Prosseguir" w="full" onPress={()=>navigation.navigate("Infracao")}/>
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
