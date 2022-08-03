import React from "react";
import styled from "styled-components/native";
import theme from "../assets/theme";

const Text = styled.Text`
  font-size: ${({ size }) =>
    size === "small" ? "12px" : size == "big" ? "18px" : "14px"};
  color: ${({ color }) => (color ? color : theme.colors.textPrimary)};
`;

export default ({ children, size, color, ...props }) => (
  <Text size={size} color={color} {...props}>
    {children}
  </Text>
);
