import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {ItemsProps} from './types';
import {Avatar, Card, TextCustom} from '../../atoms';

const Items: React.FC<ItemsProps> = ({item}) => {
  return (
    <Card>
      <View style={styles.content}>
        <Avatar source={item.avatar} size={40} />
        <View style={styles.text}>
          <TextCustom
            text={`${item.first_name} ${item.last_name}`}
            baseFontSize={16}
            textStyles={styles.textStyles}
          />
        </View>
      </View>
    </Card>
  );
};

export default memo(Items);

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  text: {
    marginLeft: '5%',
    justifyContent: 'center',
  },
  textStyles: {
    color: '#666666',
  },
});
