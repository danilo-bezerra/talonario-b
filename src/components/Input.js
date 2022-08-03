import React from "react";
import styled from "styled-components/native";
import theme from "../assets/theme";

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 14px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  color: ${theme.colors.textPrimary};
  border: 1px solid ${theme.colors.textSecondary};
  border-radius: 5px;
  padding: 10px;
`;

const Label = styled.Text`
  color: ${theme.colors.textPrimary};
  margin-bottom: 8px;
`;

export default ({ label, ...props }) => (
  <InputContainer>
    <Label>{label}</Label>
    <Input placeholderTextColor={theme.colors.textSecondary} {...props} />
  </InputContainer>
);
