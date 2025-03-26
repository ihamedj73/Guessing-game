import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function InStructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InStructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: colors.accent500,
    fontSize: 24,
  },
});
