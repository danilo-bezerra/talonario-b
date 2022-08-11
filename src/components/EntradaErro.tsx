import { VStack, Input as NativeBaseInput, IInputProps, Icon, useTheme } from 'native-base';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
export function InputErro({  ...rest }: IInputProps) {
    const { colors } = useTheme();
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={2}
      fontSize="md"
      borderColor={"red.900"}
      fontFamily="body"
      color="white"
      InputRightElement={<Icon as={<Ionicons name={"alert-outline"} color={colors.gray[300]} />} mr={4} />}
      placeholderTextColor="gray.300"
      
      {...rest}
    />
  );
}