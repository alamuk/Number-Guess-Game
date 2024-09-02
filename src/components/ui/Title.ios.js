import { Text, StyleSheet, Platform } from 'react-native';
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
    // borderWidth: 2,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
