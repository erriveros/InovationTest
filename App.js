import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [ido, setId] = useState(0)

  function addGoalHandler(goalString){
    idHandler()
    setCourseGoals([...courseGoals, {key: ido.toString(), value: goalString}]);
  }
  function idHandler(){
    setId(ido+1)
  }

  return (
    <View style={{padding: 50}}>
      <GoalInput onShitHappens={addGoalHandler}/>
      <FlatList
      data={courseGoals}
      renderItem={itemData => <GoalItem val= {itemData.item.value}/>}
      />
      
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
});
