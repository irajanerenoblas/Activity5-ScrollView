import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import guest from './src/Guest.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtuno}>LIST OF GUESTS</Text>
      {guest.map((guestss)=>{
        return(
          <View>
            <ScrollView>
              <Text style={styles.txtuno}>{guestss.name}</Text>
              <Text style={styles.txttwo}>{guestss.place}</Text>

            </ScrollView>

          </View>
        )
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 20,
    marginTop: 100,
    marginLeft: 30
  },
  txtuno: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Tahoma',

  },
  txttwo: {
    fontFamily: 'Tahoma',
    fontSize: 13,
    
  }
});