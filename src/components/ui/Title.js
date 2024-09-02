import { Text, StyleSheet } from 'react-native';
import Colors from '../../constats/Colors';

function Title({ children }) {
  return <Text style={styles.title}> {children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 24,
    // fontWeight: 'bold',
    color: Colors.accent600,
    borderColor: Colors.accent600,
    borderWidth: 2,
    padding: 12,
  },
});
