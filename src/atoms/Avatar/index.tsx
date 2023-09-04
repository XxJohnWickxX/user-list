import React, {memo, useMemo} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {AvatarProps} from './types';

const Avatar: React.FC<AvatarProps> = ({source, size = 100}) => {
  const {width} = Dimensions.get('window');

  const scaledSize = useMemo(() => (size * width) / 375, [size, width]);

  return (
    <View
      style={[
        styles.container,
        {width: scaledSize, height: scaledSize, borderRadius: scaledSize / 2},
      ]}>
      <Image source={{uri: source}} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default memo(Avatar);
