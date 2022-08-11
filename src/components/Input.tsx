import {
  Input as NativeBaseInput,
  IInputProps,
  Heading as Label,
  Icon,
} from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = IInputProps & {
  error?: boolean;
};

export function Input({ error, ...rest }: Props) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={error ? 2 : 0}
      borderColor={error ? "red.900" : "gray.700"}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      InputRightElement={
        error && (
          <Icon
            as={<Ionicons name={"alert-outline"} color="red.900" />}
            mr={4}
          />
        )
      }
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
}
