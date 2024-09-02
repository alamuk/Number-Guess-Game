import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import GameScreen from './src/screens/GameScreen';
import Colors from './src/constats/Colors';
import GameOverScreen from './src/screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  //---------------

  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  //---------------
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function handleGameOver(numberOfRound) {
    setGameOver(true);
    setGuessRounds(numberOfRound);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  //---------------

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
