import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function getRandomNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return getRandomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = getRandomNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't lie!`, 'you know this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = getRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;

  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess </Title>
      <NumberContainer> {currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionTextStyleProp}>
          Higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove" size={22} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add" size={22} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/*{guessRounds.map((guessRound) => (<Text key={guessRound}>{guessRound}</Text>))}*/}

        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
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
  screenContainer: {
    flex: 1,
    padding: 50,
  },
  instructionTextStyleProp: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
