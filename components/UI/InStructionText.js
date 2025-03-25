import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

function InStructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

export default InStructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
});
