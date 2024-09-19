import Layout from "../components/layout";
import Heading from "../components/heading";
import Button from "../components/button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function Page() {
  return (
    <Layout>
      <Heading>Wallets</Heading>
      <Button.Root
        onPress={() => router.push("/new-wallet")}
        style={{ gap: 8 }}
      >
        <AntDesign name="pluscircleo" size={24} color="white" />
        <Button.Text>New Wallet</Button.Text>
      </Button.Root>
      {/** TODO: wallets list here */}
      <Heading>Transactions</Heading>
    </Layout>
  );
}
