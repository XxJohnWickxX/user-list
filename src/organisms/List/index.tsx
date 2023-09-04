import {FlatList} from 'react-native';
import React from 'react';
import useGetUsers from '../../Hooks/useGetUsers';
import Items from '../../molecules/Items';

const List = () => {
  const data = useGetUsers();

  return (
    <FlatList
      data={data?.data}
      renderItem={item => <Items item={item.item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
