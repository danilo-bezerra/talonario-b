import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { VStack, Text } from "native-base";
import { getLocation } from "../utils/getLocation";

export function MapViewer() {
  const { latitude, longitude } = getLocation();

  console.log({ latitude, longitude });

  if (latitude && longitude) {
    return (
      <VStack style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
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
