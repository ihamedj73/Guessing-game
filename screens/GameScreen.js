import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import GuessLogItem from "../components/game/GuessLogItem";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/UI/Card";
import InStructionText from "../components/UI/InStructionText";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(
    function () {
      if (currentGuess == userNumber) {
        onGameOver(guessRounds.length);
      }
    },
    [currentGuess, userNumber, onGameOver]
  );

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuestHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong ...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((rounds) => [newRndNumber, ...rounds]);
  }

  const guessRoundsLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InStructionText style={styles.instructionText}>
          Higher or lower?
        </InStructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuestHandler("lower")}>
              <Ionicons name="remove" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuestHandler("higher")}>
              <Ionicons name="add" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // paddingTop: 35,
    padding: 24,
  },
  instructionText: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
