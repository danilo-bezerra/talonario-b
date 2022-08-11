import React, { useState, useContext, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { VStack, Heading, Icon, useTheme, FlatList, Text, Modal, ScrollView} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import { AreaText } from '../components/AreaText';
import { Button } from '../components/Botao';
import useLocation from "../hooks/useLocation";
import useFormatedDate from "../hooks/useFormatedDate";
import { Input } from "../components/Entrada"
import styled from "styled-components/native";
import results from "../assets/infracoes.json"
import MapView from './Dashboard/GeoInfo/MapView';
export function Infracoes() {
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
  const [searchText, setSearchText] = useState("");
  const { colors } = useTheme();
  const [infra, setInfra] = useState("")
  const [list, setList] = useState(results)
  const [showModal, setShowModal] = useState(false)
  const [showModalLocal, setShowModalLocal] = useState(false)
  const [showPass, setShowPass] = useState(true)
  const [reload, setReload] = useState(false);
  const [originalData,setOriginalData] = useState(results)
  const { latitude, longitude, address } = useLocation();
  const { formatedDate, formatedHours } = useFormatedDate();
  function renderPost(item){
    let temp = item.artigo+" | "+item.codigo+" - "+item.desob+" "+item.descricao
    return(
      <VStack flex={1}  alignItems="flex-start" bg="gray.600"  pt={2}>
        <Text  style={styles.item} color="white" onPress={()=>setInfra(temp)}>{item.artigo} | {item.codigo} - {item.desob}{"\n"}{item.descricao}</Text>
        
      </VStack>
    )
  }
  function search(s){
    let ar = JSON.parse(JSON.stringify(originalData));

    setList(ar.filter((d) => d.descricao.toLowerCase().includes(s.toLowerCase()) || d.artigo.includes(s) || d.codigo.includes(s)))
  }
  return (
    <VStack flex={1} alignItems="flex-start" bg="gray.600" px={2} pt={2}>
    <Heading color="gray.100" fontSize="13" mt={2} mb={1}> Infração</Heading>
    <AreaText placeholder='Infração'
    h={"100"}
    value={infra}
    onChangeText={(s)=>{search(s),setInfra(s)}}    
    />
    <FlatList
        data={list}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={(item) => String(item.id)}
      />
     <Button mt="4" title="Continuar" mb="2" w="full" onPress={()=>setShowModalLocal(true)}/>
     <Modal isOpen={showModalLocal} px={"2"} w="full" size="full" alignItems={"flex-start"}  backgroundColor={"gray.600"} >
      
         <ScrollView w={"full"} >
          <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
            Localização      
          </Heading>
          <MapView/>
        <Text color={"white"}>Data: {formatedDate}</Text>
        <Text color={"white"}>Hora: {formatedHours}</Text>
        <Text color={"white"}>Endereço:</Text>
        <AreaText h={20} mb={4} color={"white"}>
          {` ${address?.street}, ${address?.district}, ${address?.subregion} - ${address?.region}, Brasil`}
        </AreaText>
        <ReloadButton onPress={() => setReload((v) => !v)}>
          <Ionicons
            name="reload-outline"
            size={36}
            color={"gray"}
          />
        </ReloadButton>

                <Button 
                  mb={4}
                  w={"full"}
                  onPress={()=>setShowModal(true)}
                  title={"Continuar"}
                 />
                <Button 
                  mb={4}
                  w={"full"}
                  onPress={()=>setShowModalLocal(false)}
                  title={"Voltar"}
                  />
                  </ScrollView>
             
          </Modal> 
  
     <Modal isOpen={showModal} px={"3"} size="full" alignItems={"flex-start"} backgroundColor={"gray.600"} safeAreaTop={true}>
      <Modal.Content backgroundColor={"gray.600"} marginBottom={"auto"} marginTop={"0"}>
                <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
                Enviar Multa      
                </Heading>
               <Heading color="gray.100" fontSize="13" mt={2} mb={1}  > Observação</Heading>
                <AreaText placeholder='Observação'  InputLeftElement={<Icon as={<Ionicons name={"reader-outline"} color={colors.gray[300]} />} ml={4} />} mb={4}/>
                <Heading color="gray.100" fontSize="13" mt={2} mb={1} > Senha</Heading>
                <Input placeholder="Senha:" secureTextEntry={showPass} InputLeftElement={<Icon as={<Ionicons name={"key"} color={colors.gray[300]} />} ml={4} />} mb={4}/>
                <Button 
                  mb={4}
                  w={"full"}
                  onPress={()=>Alert.alert("Sucesso","Multa Enviada.")}
                  title={"Enviar"}
                 />
                <Button 
                  mb={4}
                  w={"full"}
                  onPress={()=>setShowModal(false)}
                  title={"Cancelar"}
                  />
              </Modal.Content>
          </Modal> 
  
    </VStack>
    
  )
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    paddingTop: 15,
    paddingBottom: 15,
  }
  });