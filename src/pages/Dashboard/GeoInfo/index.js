import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { Text } from "native-base";
import { useState } from "react";
import theme from "../../../assets/theme";
import { MapViewer } from "../../../components/MapView";
import { getLocation } from "../../../utils/getLocation";
import { getDate } from "../../../utils/getDate";

const GeoInfoContainer = styled.View`
  border: 1px solid #fff5;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const TextContainer = styled.View`
  width: 100%;
  padding: 8px;
  padding-top: 0;
`;

const ReloadButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  position: absolute;
  top: 0px;
  right: 8px;
  align-items: center;
  justify-content: center;
`;

export default function GeoInfo() {
  const { latitude, longitude, address } = getLocation();
  const { currentDate, currentHour } = getDate();

  const [reload, setReload] = useState(false);

  return (
    <GeoInfoContainer>
      <MapViewer />
      <TextContainer>
        <Text color={"white"}>Latitude: {latitude || "Buscando..."}</Text>
        <Text color={"white"}>Longitude: {longitude || "Buscando..."}</Text>
        <Text color="white">Data: {currentDate}</Text>
        <Text color={"white"}>Hora: {currentHour}</Text>
        <Text color={"white"}>
          Endereço:
          {" " + address}
        </Text>
        <ReloadButton onPress={() => setReload((v) => !v)}>
          <Ionicons
            name="reload-outline"
            size={36}
            color={theme.colors.buttonBg1}
          />
        </ReloadButton>
      </TextContainer>
    </GeoInfoContainer>
  );
}
