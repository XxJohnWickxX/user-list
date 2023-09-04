import React, {memo} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
      },
      android: {
        elevation: 2,
      },
    }),
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
  },
});

export default memo(Card);
