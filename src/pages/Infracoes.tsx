import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Heading, Icon, useTheme, FlatList, Text} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import { AreaText } from '../components/AreaText';
import { Button } from '../components/Botao';
import results from "../assets/infracoes.json"

export function Infracoes() {
  const [searchText, setSearchText] = useState("");
  const { colors } = useTheme();
  const [infra, setInfra] = useState("")
  const [list, setList] = useState(results)
  const [originalData,setOriginalData] = useState(results)
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
     <Button mt="4" title="Continuar" mb="2" w="full"/>
    
  
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