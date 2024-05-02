import {StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {FontSizes, FontWeights} from '../../theme/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  circleButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 48,
  },
  cirlceButtons: {
    backgroundColor: Colors.actionPrimary,
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButtonText: {
    color: Colors.textSecondary,
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold,
    letterSpacing: 0.45,
  },
});
