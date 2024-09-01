import { Text, View, StyleSheet, Pressable } from 'react-native';

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log('Pressed!');
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.buttonPressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#72063c',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0,
  },
});
