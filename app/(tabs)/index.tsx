import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Button, StyleSheet } from 'react-native';
import "../../global.css"
import { useCamera } from '@/hooks/useCamera';


export default function HomeScreen() {
  const { openCamera, hasPermission } = useCamera();

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera </Text>;
  }

  return (
    <SafeAreaView style={styles.titleContainer}>
      <Text className='text-red-500'>Hello works</Text>
      <Button title="Scan Card" onPress={openCamera} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});



// const scanLocations = [
//   {
//     id: '1',
//     plate: 'OC1234',
//     scannedAt: '2025-04-14T09:00:00Z',
//     location: {
//       latitude: 16.88613,
//       longitude: 97.61678,
//     },
//   }
// ];