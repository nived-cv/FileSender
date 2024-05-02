import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackNavigationProps} from '../../routes/routes';
import {styles} from './styles';

interface AppBarProps {
  disableBackAction?: boolean;
  disableMenu?: boolean;
}

export const AppBar = ({
  disableBackAction,
  disableMenu = true,
}: AppBarProps) => {
  const route = useRoute();
  const navigation = useNavigation<RootStackNavigationProps>();
  const [isBackButtonShown, setIsBackButtonShown] = useState(true);

  useEffect(() => {
    setIsBackButtonShown(navigation.canGoBack());
    disableBackAction && setIsBackButtonShown(false);
  }, [route, disableBackAction]);

  const onBackPressed = () => isBackButtonShown && navigation.goBack();

  return (
    <View style={styles.appBar}>
      {isBackButtonShown && (
        <TouchableOpacity
          onPress={onBackPressed}
          style={styles.appBarLeftGroup}>
          <Icon name="arrow-back-ios-new" />
        </TouchableOpacity>
      )}

      {!disableMenu && (
        <TouchableHighlight style={styles.appBarRightGroup}>
          <Icon name="more-vert" size={24} />
        </TouchableHighlight>
      )}
    </View>
  );
};

interface PageWrapperProps {
  children?: React.ReactNode | React.ReactNode[];
  hasBack?: boolean;
}
export const PageWrapper = ({children}: PageWrapperProps) => {
  return (
    <View style={styles.container}>
      <AppBar />
      <ScrollView
        style={styles.childrenContainer}
        contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};
