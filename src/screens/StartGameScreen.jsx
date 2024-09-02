import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constats/Colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function handleInputNumber(inputNumberText) {
    setEnteredNumber(inputNumberText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function handleInputConfirm() {
    const chooseNumber = parseInt(enteredNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert('Invalid number', 'This must be number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);

      return;
    }
    onPickNumber(chooseNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          onChangeText={handleInputNumber}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleInputConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
