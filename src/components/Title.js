import { Text, StyleSheet } from 'react-native';
import Colors from '../constats/Colors';

function Title({ children }) {
  return <Text style={styles.title}> {children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  },
});
