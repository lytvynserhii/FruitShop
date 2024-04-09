import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { DecreaseIcon } from 'components/svg/DecreaseIcon';
import { IncreaseIcon } from 'components/svg/IncreaseIcon';

import {
  NUMBER_PICKER_MAX_VALUE,
  NUMBER_PICKER_MIN_VALUE,
} from './numberPicker.settings';
import { styles } from './numberPicker.styles';
import { NumberPickerProps } from './numberPicker.types';

export const NumberPicker: FC<NumberPickerProps> = ({
  value,
  onChangeValue,
  minValue = NUMBER_PICKER_MIN_VALUE,
  maxValue = NUMBER_PICKER_MAX_VALUE,
}) => {
  const increaseValue = () => {
    if (value < maxValue) {
      onChangeValue(value + 1);
    }
  };

  const decreaseValue = () => {
    if (value > minValue) {
      onChangeValue(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseValue}>
        <DecreaseIcon />
      </TouchableOpacity>
      <Text style={styles.value}>{value} Kg</Text>
      <TouchableOpacity onPress={increaseValue}>
        <IncreaseIcon />
      </TouchableOpacity>
    </View>
  );
};
