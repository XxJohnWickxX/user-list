import {Text, View, Dimensions} from 'react-native';
import React, {memo, useCallback} from 'react';
import {TextCustomProps} from './types';

const TextCustom = ({
  baseFontSize,
  text,
  textStyles,
  selectable,
}: TextCustomProps) => {
  const {width} = Dimensions.get('window');

  const scaledFontSize = useCallback(
    (size: number) => {
      const scale = width / 375;
      const newSize = size * scale;
      return Math.round(newSize);
    },
    [width],
  );

  return (
    <View>
      <Text
        selectable={selectable}
        style={{
          fontSize: scaledFontSize(baseFontSize),
          ...textStyles,
        }}>
        {text}
      </Text>
    </View>
  );
};

export default memo(TextCustom);
