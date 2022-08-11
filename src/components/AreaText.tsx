import { TextArea, IInputProps } from 'native-base';
import React from 'react';

export function AreaText({ ...rest }: IInputProps) {
  return (
    <TextArea
      bg="gray.700"
      h={120}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      autoCompleteType={false}
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
      {...rest}
    />
  );
}