import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  childrenContainer: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    backgroundColor: Colors.primary,
  },
  appBar: {
    width: '100%',
    minHeight: 40,
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: Colors.primary,
  },
  appBarRightGroup: {
    alignSelf: 'flex-end',
  },
  appBarLeftGroup: {
    alignSelf: 'flex-start',
  },
});
