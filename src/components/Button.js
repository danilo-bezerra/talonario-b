import React from "react";
import styled from "styled-components/native";
import theme from "../assets/theme";

const Button = styled.TouchableHighlight`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.buttonBg1};
  border-radius: 5px;
  margin-bottom: 8px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.textPrimary};
`;

export default ({ children, ...props }) => {
  return (
    <Button {...props} underlayColor={theme.colors.buttonBg2}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};
