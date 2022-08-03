import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import Page from "../../../components/Page";
import Text from "../../../components/Text";

import MapView from "./MapView";

import useLocation from "../../../hooks/useLocation";
import useFormatedDate from "../../../hooks/useFormatedDate";
import { useState } from "react";
import theme from "../../../assets/theme";

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
  const { latitude, longitude, address } = useLocation();
  const { formatedDate, formatedHours } = useFormatedDate();

  const [reload, setReload] = useState(false);

  return (
    <GeoInfoContainer>
      <MapView />
      <TextContainer>
        <Text>Latitude: {latitude || "Buscando..."}</Text>
        <Text>Longitude: {longitude || "Buscando..."}</Text>
        <Text>Data: {formatedDate}</Text>
        <Text>Hora: {formatedHours}</Text>
        <Text>
          Endereço:
          {` ${address?.street}, ${address?.district}, ${address?.subregion} - ${address?.region}, Brasil`}
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
