import { styled } from "@fast-styles/react";
import { PropsWithChildren } from "react";
import { View } from "react-native";

const LayoutPerimeter = styled(View, {
  flex: 1,
  gap: 16,
  paddingHorizontal: 16,
  paddingVertical: 24,
});

export default function Layout({ children }: PropsWithChildren) {
  return <LayoutPerimeter>{children}</LayoutPerimeter>;
}
