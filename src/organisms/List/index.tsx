import {FlatList} from 'react-native';
import React, {memo} from 'react';
import {NavigationProp} from '@react-navigation/native';
import useGetUsers from '../../Hooks/useGetUsers';
import Items from '../../molecules/Items';
import {RootStackParamList} from '../../navigation/types';

type ScreenNavigationProp = NavigationProp<RootStackParamList, 'UserList'>;

interface UserListScreenProps {
  navigation: ScreenNavigationProp;
}

const List: React.FC<UserListScreenProps> = ({navigation}) => {
  const data = useGetUsers();

  return (
    <FlatList
      data={data?.data}
      renderItem={item => <Items item={item.item} navigation={navigation} />}
      keyExtractor={item => item.id}
    />
  );
};

export default memo(List);
