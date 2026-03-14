import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  FlatList 
} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('green');

  const colorData = [
    { id: '1', name: 'BLUE', value: 'blue' },
    { id: '2', name: 'BROWN', value: 'brown' },
    { id: '3', name: 'YELLOW', value: 'yellow' },
    { id: '4', name: 'RED', value: 'red' },
    { id: '5', name: 'BLACK', value: 'black' },
  ];

  const renderColorButton = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.value }]}
      onPress={() => setBgColor(item.value)} 
      activeOpacity={0.8}
    >
      <Text style={[
        styles.buttonText,
        { color: item.value === 'yellow' ? 'black' : 'white' } 
      ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      
      <Text style={[
        styles.headerText, 
        { color: bgColor === 'yellow' ? 'black' : 'white' }
      ]}>
        {bgColor.toUpperCase()}
      </Text>
      
      <FlatList
        data={colorData}
        keyExtractor={item => item.id}
        renderItem={renderColorButton}
        contentContainerStyle={styles.listContainer}
      />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  }
});

export default App;