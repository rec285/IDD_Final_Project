import React, { useState } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    View,
    TextInput
  } from 'react-native';
import Comment from '../components/Comment';

  
  export default class ProfessorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: JSON.parse(props.navigation.state.params.chosenProf.comments),
            possComment: '',
            professor: props.navigation.state.params.chosenProf
        }
        console.log('NAME:',props.navigation.state.params.chosenProf);
        
    }
    

    static navigationOptions = (props) => {
        return {title: props.navigation.state.params.chosenProf.name,
        headerStyle: {
            backgroundColor: '#87CEFA'
        }}
    }

    addComment = (comment) => {
        let currComments = JSON.parse(JSON.stringify(this.state.comments)); // make deep copy
        currComments.push(comment);
        this.setState({comments:currComments}); //so comments reloads
        this.setState({possComment:''});
        let updateProfessor = this.state.professor;
        console.log('updated Prof before comments:', updateProfessor);
        updateProfessor.comments = JSON.stringify(currComments);
        console.log('updatedProfessor:', updateProfessor);
        this.props.screenProps.updateProfessor(updateProfessor);
    }

    

    render(props) {
        
        return (
            <View style={styles.container}>
                <TextInput 
                    onChangeText={val => this.setState({possComment:val})} 
                    placeholder="Tea?" 
                    style={styles.commentInput}
                    value={this.state.possComment}>
                </TextInput>
                <Button title='Add Tea' onPress={() => this.addComment(this.state.possComment)} />
                <ScrollView>
                    {
                        this.state.comments.map((comment,index) => (
                            <Comment data={{professor:this.state.professor, commentVal:comment, updateProfessor: this.props.screenProps.updateProfessor}}/>
                        ))
                    }
                </ScrollView>
            </View>
            
        )
    }

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
      }
  });