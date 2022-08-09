import { VStack } from "native-base";
import GeoInfo from "./GeoInfo";

export default function Dashboard() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600"  pt={4}>
      <GeoInfo />
    </VStack>
  );
}
