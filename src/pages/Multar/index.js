import { apiConsultaPlaca } from "../../services/api";
import {} from "./styles";
import { useState } from "react";

import Page from "../../components/Page";
import Scroll from "../../components/Scroll";
import Text from "../../components/Text";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Multar() {
  const [veiculo, setVeiculo] = useState(null);
  const [placa, setPlaca] = useState("");
  const [erroInputPlaca, setErroInputPlaca] = useState(false);

  function validatePlaca() {
    const regex = /[A-Za-z]{3}[0-9][0-9A-Za-z][0-9]{2}/;
    if (regex.test(placa)) {
      return true;
    } else {
      return false;
    }
  }

  async function handleClick() {
    if (validatePlaca()) {
      const response = await apiConsultaPlaca.get(
        `/${placa}.json?placa=${placa}`
      );
      setErroInputPlaca(false);

      if (!response.data.pageProps.vehicleData) {
        alert("Veiculo não existe");
        return;
      }
      setVeiculo(response.data.pageProps);
    } else {
      setVeiculo(null);
      setErroInputPlaca(true);
      console.log("placa invalida");
    }
  }

  if (erroInputPlaca) {
    alert("Placa Inválida");
    setErroInputPlaca(false);
  }

  return (
    <Page>
      <Scroll>
        <Input
          label="Placa"
          placeholder="Placa"
          onChangeText={(newText) => setPlaca(newText)}
          defaultValue={placa}
          erroInputPlaca={erroInputPlaca}
        />
        <Button onPress={handleClick}>
          <Text>Consultar</Text>
        </Button>
        <Input
          label="Modelo"
          placeholder="Modelo"
          defaultValue={veiculo?.vehicleData?.Modelo}
        />
        <Input
          label="Marca"
          placeholder="Marca"
          defaultValue={veiculo?.vehicleData?.Marca}
        />
        <Input
          label="Cor"
          placeholder="Cor"
          defaultValue={veiculo?.vehicleData?.cor}
        />
        <Input
          label="Cidade/UF"
          placeholder="Cidade/UF"
          defaultValue={
            veiculo?.vehicleData?.municipio
              ? `${veiculo?.vehicleData?.municipio} - ${veiculo?.vehicleData?.uf}`
              : ""
          }
        />
        <Input
          label="Chassi"
          placeholder="Chassi"
          defaultValue={veiculo?.vehicleData?.chassi}
        />
        <Input
          label="Ano"
          placeholder="Ano"
          defaultValue={veiculo?.vehicleData?.AnoModelo}
        />
        <Button>
          <Text>Proseguir</Text>
        </Button>
      </Scroll>
    </Page>
  );
}
