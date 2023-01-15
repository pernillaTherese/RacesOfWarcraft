import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  Image,
  useWindowDimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import NavButton from './ui/NavButton';
import colors from '../utilities/colors';

const Camera = () => {
  const { styles } = myStyles();
  const [permissionInformation, requestPermission] =
    ImagePicker.useCameraPermissions();
  const [image, setImage] = useState('');

  const verifyAccess = async () => {
    if (
      permissionInformation.status === ImagePicker.PermissionStatus.UNDETERMINED
    ) {
      const response = await requestPermission();
      return response.granted;
    }
    if (permissionInformation.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert('Camera access denied!');
      return false;
    }
    return true;
  };

  const onTakePhotoHandler = async () => {
    const hasPermission = await verifyAccess();
    if (!hasPermission) return;
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.uri);
  };

  let imagePreview = (
    <Image
      style={styles.image}
      source={require('../assets/images/wowLogo.png')}
    />
  );
  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <NavButton onPressed={onTakePhotoHandler}>Change Picture</NavButton>
    </View>
  );
};
export default Camera;

const myStyles = () => {
  const { width, height } = useWindowDimensions();
  if (width > height) {
    var landscape = true;
  } else {
    landscape = false;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imagePreview: {
      width: '100%',
      height: landscape ? '50%' : '80%',
      alignSelf: 'center',
      backgroundColor: 'rgba(00, 00, 00, 0.0)',
      marginVertical: 20,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
  });
  return { styles };
};
