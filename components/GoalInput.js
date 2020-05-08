import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('')
    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText);
    };

    return(
        <View style={{borderBottomWidth:1}}>
            <TextInput 
                placeholder="Course Goals"
                onChangeText={goalInputHandler}/>
        
            <Button title='ADD' onPress={() => props.onShitHappens(enteredGoal)}/>
        </View>
    );

};

export default GoalInput;