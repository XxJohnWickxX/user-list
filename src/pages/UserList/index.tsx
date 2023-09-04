import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import List from '../../organisms/List';
import {TextCustom} from '../../atoms';
import {RootStackParamList} from '../../navigation/types';

type ScreenANavigationProp = NavigationProp<RootStackParamList, 'UserList'>;

interface UserListScreenProps {
  navigation: ScreenANavigationProp;
}

const UserList: React.FC<UserListScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TextCustom
        text="User List"
        baseFontSize={20}
        textStyles={styles.title}
      />
      <List navigation={navigation} />
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
