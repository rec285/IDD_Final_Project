import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  View,
  Slider
} from 'react-native';
import ProfessorService from '../Services/ProfessorService';

export default function HomeScreen(props) {

  const [spiritVal, setSpiritVal] = useState(0);
  const [mixerVal, setMixerVal] = useState(0);


  
  viewProfessor = (name) => {
    chosenProf = {};
    for(let i = 0; i < props.screenProps.professors.length; i++) {
      if(props.screenProps.professors[i].name.valueOf() == name.valueOf()) {
        chosenProf = props.screenProps.professors[i];
        console.log('CHOSEN:', chosenProf);
      }
    }
    console.log()
    props.navigation.navigate('Professor', {chosenProf});
  }

  submitDrink = (ratios) => {
    console.log('IN SUBMIT');
    ProfessorService
      .submitDrink(ratios)
      .then(() => {
        console.log('DONE');
      });
  }

  return (
    <View style={styles.container}>
        
        
        {/* {props.screenProps.professors.map((professor,index) => (
          <View>
            <TouchableWithoutFeedback onPress={() => viewProfessor(professor.name)}>
              <View style={styles.professorContainer}>
                <Text style={styles.professorText}>{professor.name}</Text>
              </View>
            </TouchableWithoutFeedback>
            
          </View>
          
        ))} */}

        <Text style={styles.sliderText}>Spirit Value: {spiritVal}</Text>
         <Slider
        style={{ width: 300 }}
        step={1}
        minimumValue={0}
        maximumValue={10}
        value={spiritVal}
        onValueChange={val => setSpiritVal(val)}
        onSlidingComplete={ val => console.log(val)}
      />
      <Text style={styles.sliderText}>Mixer Value: {mixerVal}</Text>
      <Slider
              style={{ width: 300, paddingLeft:50 }}
              step={1}
              minimumValue={0}
              maximumValue={10}
              value={mixerVal}
              onValueChange={val => setMixerVal(val)}
              onSlidingComplete={ val => console.log(val)}
            />

              <Button
                title="Submit"
                onPress={() => submitDrink({spirt:spiritVal,mixer:mixerVal})}
                />

   
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'BotTender',
  headerStyle: {
    backgroundColor: '#87CEFA'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  professorContainer: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#87CEFA',
    backgroundColor: '#fff'
  },
  professorText: {
    color: 'black',
    fontSize: 30
  },
  sliderText: {
    color: 'black',
    fontSize: 20,
    textAlign: "center",
    paddingTop:50
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 20
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
