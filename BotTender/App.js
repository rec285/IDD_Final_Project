import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProfessorService from './Services/ProfessorService';
import Spinner from 'react-native-loading-spinner-overlay';

import AppNavigator from './navigation/AppNavigator';
export default function App(props) {
  const [professors, setProfessors] = useState([]);
  const [spinner, setSpinner] = useState(false);
  // loadProfessors = (isReload) => {
  //   let current = {};
  //   if(professors.length == 0 || isReload) {
  //     console.log('hello from if');
  //     // ProfessorService
  //     //   .getProfessors()
  //     //   .then((profs) => {
  //     //     current = profs.data
  //     //     console.log('CURRENT:',current);
  //     //     setProfessors(current);
  //     //   })
  //     //   .finally(() => {
  //     //     setSpinner(false);
  //     //   })
      
  //   }
  // }

  addProfessor = (name) => {
    ProfessorService
      .createProfessor(name)
      .then(() => {
        loadProfessors(true);
      });
  }

  updateProfessor = (updateProfessor) => {
    ProfessorService
      .updateProfessor(updateProfessor)
      .then(() => {
        loadProfessors(true);
      });
  }

  // loadProfessors(false);

  return (

    

    <View style={styles.container}>

        <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />

      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator 
      screenProps = {{
        professors: professors,
        addProfessor: addProfessor,
        updateProfessor: updateProfessor
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
