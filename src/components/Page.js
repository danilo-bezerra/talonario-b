import React from "react";
import styled from "styled-components/native";
import theme from "../assets/theme";

const Page = styled.View`
  flex: 1;
  align-items: center;
  padding: 14px;
  background-color: ${theme.colors.bgSecondary};
`;

export default ({ children }) => <Page>{children}</Page>;
