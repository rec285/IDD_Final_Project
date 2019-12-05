import React, { useState, useEffect } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    TextInput
  } from 'react-native';

  import { Button } from 'react-native-elements';

  export default function Comment(props) {
      console.log('PROPS in COMMENT', props);
      const [count, setCount] = useState(props.data.professor.count);

      addCount = () => {
        
        let newProfessor = props.data.professor;
        newProfessor.count = count;
        setCount(count+1);
        props.data.updateProfessor(newProfessor);
      }

      return (

        <View style={styles.commentContainer}>
            <Text style={styles.commentText}>{props.data.commentVal}</Text>
            <Text style={styles.countText}>{count}</Text>

            <Button
                title="Add"
                onPress={() => addCount()}
                />
        </View>

      )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    commentInput: {
        margin: 10,
        height:50,
        paddingHorizontal: 10,
        backgroundColor: 'white'
      },
      commentContainer: {
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#87CEFA',
        backgroundColor: '#fff'
      },
      commentText: {
          fontSize: 15
      },
      countText: {
          flex:1,
          textAlign: 'right'
      }
  });