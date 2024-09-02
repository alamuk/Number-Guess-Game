import { View, StyleSheet } from 'react-native';
import Colors from '../../constats/Colors';

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});
