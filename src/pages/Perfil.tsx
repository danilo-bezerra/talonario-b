import { useContext } from "react";
import { VStack, Heading} from 'native-base';

import { UserContext } from "../contexts/UserContext";

export default function Perfil() {
  const { user } = useContext(UserContext);

  const { displayName, email, photoUrl } = user.providerData[0];

  return (
    <VStack flex={1} alignItems="flex-start" bg="gray.600" px={8} pt={15}>
        <Heading color="gray.100" fontSize="xl">Perfil</Heading>
      <Heading color="gray.100" fontSize="xl">{displayName}</Heading>
      <Heading color="gray.100" fontSize="xl">{email}</Heading>
      </VStack>
  );
}
