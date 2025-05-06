import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';
import "../../global.css"
import { useCamera } from '@/hooks/useCamera';
import Button from '@/components/ui/Button';
import VehicleCard from '@/components/vehiclecard/VehicleCard';


export default function HomeScreen() {
  const { openCamera, hasPermission, uploading, vehicle } = useCamera();

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera </Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={openCamera}
        isLoading={uploading}
      >
        <Text style={styles.buttonText}>Scan Card</Text>
      </Button>

      {
        !uploading && (
          <VehicleCard
            vehicle={vehicle}
          />
        )
      }



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
  },

  detailsContainer: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});



