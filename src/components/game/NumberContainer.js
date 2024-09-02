import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constats/Colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
