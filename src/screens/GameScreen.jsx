import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screenContainer}>
      <Title>Opponent's Guess </Title>
      {/*GUESS */}
      <View>
        <Text> Game over </Text>
        {/* + -  */}
      </View>
      {/*<View>LOG ROUNDS</View>*/}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 50,
  },
});
