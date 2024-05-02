import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  label?: string;
  child: React.ReactNode;
}

export const Button = ({label, child, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      {child}
      {label && <Text>{label}</Text>}
    </TouchableOpacity>
  );
};
