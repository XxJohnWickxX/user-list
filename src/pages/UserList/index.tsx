import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import List from '../../organisms/List';
import {TextCustom} from '../../atoms';

const UserList = () => {
  return (
    <View style={styles.container}>
      <TextCustom
        text="User List"
        baseFontSize={18}
        textStyles={styles.title}
      />
      <List />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    paddingTop: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#666666',
  },
});
