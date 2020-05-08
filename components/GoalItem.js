import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function GoalItem (props) {
    return(
        <View style={styles.listItem}>
          <Text>{props.val}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem:{
        borderColor:'black',
        borderWidth:1,
        padding: 10,
    
      }
})

export default GoalItem;
