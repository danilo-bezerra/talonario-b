import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import useLocation from "../../../../hooks/useLocation";
import { VStack, Text} from "native-base";
export default function () {
  const { latitude, longitude, address } = useLocation();

  if (latitude && longitude) {
    return (
      <VStack style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      </VStack>
    );
  } else {
    return (
      <VStack style={styles.container}>
        <Text>Buscando...</Text>
      </VStack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#c5c5c5",
    borderStyle: "solid",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
