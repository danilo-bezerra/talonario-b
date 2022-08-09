import React, { useState, useContext } from 'react';
import { VStack, Heading, Icon, useTheme} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import { Input } from '../components/Entrada';
import { Button } from '../components/Botao';


export function Infracoes() {

  const { colors } = useTheme();
  
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
    
  
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua conta
      </Heading>

    
    </VStack>
    
  )
}