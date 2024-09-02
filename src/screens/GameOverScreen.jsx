import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constats/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highLightText}> {roundsNumber} </Text> rounds to
        guess the number
        <Text style={styles.highLightText}> {userNumber} </Text> .
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginVertical: 36,
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highLightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
