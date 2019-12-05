import React, {useState} from 'react';
import { ScrollView, StyleSheet,Text, TextInput, Button, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen(props) {
  const[possProfessor,setProfessor] = useState('');

  addProfessor = (professor) => {
    props.screenProps.addProfessor(professor);
    setProfessor('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={'Name'}
        style={styles.textInput}
        value={possProfessor}
        onChangeText={val => setProfessor(val)}
      />
      <Button title='Add Professor' onPress={() => addProfessor(possProfessor)} />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Add Professor',
  headerStyle: {
    backgroundColor: '#87CEFA'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center'
  },
  textInput: {
    margin: 10,
    height:50,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  }
});
