import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

//

export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" hidden={true} />
      <View>
        
      
        <FlatList
          data={artists}
          renderItem={({item}) => 
          <View style={styles.list}>
            <Text>{item.strArtist}</Text>
            <Text>{item.strStyle}</Text>
            <Text>{item.strGenre}</Text>
            <Text>{item.strBiographyEN}</Text>
          </View>
          }
          keyExtractor={(item) => item.idArtist
          }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    padding: 20,
    margin: 10,
    backgroundColor: '#bbb'
  }
});
