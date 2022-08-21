import { useState } from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {
  const[toDoGoals, setToDoGoals] = useState([]);
  const[visibleModal, setVisibleModal] = useState(false);

  function startAddNewGoalHandler ()  {
    setVisibleModal(true);
  }

  function finishAddGoalHandler() {
    setVisibleModal(false);
  }
  

  function addGoalHandler(enteredGoalText) {
    setToDoGoals((currentGoal) => [
      ...currentGoal,
      {text: enteredGoalText, id: Math.random().toString() },
    ]);
    finishAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setToDoGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }
  
  return (
    <View style={styles.appContainer}>
      <Button style={styles.addNewGoalButton} title='Add New Goal' onPress={startAddNewGoalHandler}/>
      <GoalInput 
        visible={visibleModal} 
        onAddGoal={addGoalHandler} 
        />
      <View style={styles.addGoalContainer}>
        <FlatList
          data={toDoGoals}
          renderItem={(itemData) => {
            return(
              <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              >
              </GoalItem>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //"#fff"
  appContainer: {
    marginTop: 40,
    flex: 4,
    padding: 20,

  },
  coontainer: {
    flex: 1,
    backgroundColor: 'red' ,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  addNewGoalButton: {
    marginTop: '10%',
    padding: 10,
    color: 'pink',
  }
  
});
