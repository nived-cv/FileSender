import {Text, TouchableOpacity, View} from 'react-native';
import * as ScopedStorage from 'react-native-scoped-storage';
import {PageWrapper} from '../../components/PageWrapper';
import {styles} from './styles';

const Discover = () => {
  const openDocumentTree = async () => {
    let dir = await ScopedStorage.openDocumentTree(true);
  };

  const onSendPress = () => {
    openDocumentTree();
    console.log('sending...');
  };

  const onRecievePress = () => {
    console.log('recieving...');
  };

  return (
    <PageWrapper>
      <View style={styles.container}>
        <View style={styles.circleButtonsContainer}>
          <TouchableOpacity onPress={onSendPress} style={styles.cirlceButtons}>
            <Text style={styles.circleButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onRecievePress}
            style={styles.cirlceButtons}>
            <Text style={styles.circleButtonText}>Recieve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PageWrapper>
  );
};

export default Discover;
