import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin: 25px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
  align-self: flex-start;
`;

export const CheckBox = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 2px;
  margin-right: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
`;
