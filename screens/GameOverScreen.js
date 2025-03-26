import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.jpg")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summeryText}>
        Your phone needed <Text style={styles.highlightText}>X</Text> round to
        guess the number <Text style={styles.highlightText}>Y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summeryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
