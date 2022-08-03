import React from "react";
import styled from "styled-components/native";

const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export default ({ children }) => <Scroll>{children}</Scroll>;
