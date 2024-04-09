import { TouchableOpacity, View } from 'react-native';

import { DeleteIcon } from 'components/svg/DeleteIcon';
import { EditIcon } from 'components/svg/EditIcon';

import { styles } from './operationButtons.styles';

export const OperationButtons = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <EditIcon />
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <DeleteIcon />
    </TouchableOpacity>
  </View>
);
