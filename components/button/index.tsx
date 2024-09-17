import { styled } from "@fast-styles/react";
import { Text, TouchableOpacity } from "react-native";

const ButtonRoot = styled(TouchableOpacity, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#087ea4",
  width: 200,
  padding: 12,
  borderRadius: 8,
});

const ButtonText = styled(Text, {
  color: "#fbfbfb",
  fontWeight: 700,
});

const Button = { Root: ButtonRoot, Text: ButtonText };

export default Button;
