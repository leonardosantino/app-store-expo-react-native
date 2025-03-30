import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View>
      <Text>Abount screen</Text>
      <Link href="/about">Go to Home screen</Link>
    </View>
  );
}
