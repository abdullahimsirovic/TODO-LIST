import { useState } from "react";
import { Modal, StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {

const[enteredGoalText, setEnteredGoalText] = useState('');


function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
}


function addGoalHandler() {
  props.onAddGoal(enteredGoalText);
  setEnteredGoalText('');

}

return (
    <Modal visible={props.visible}>
        <View style={styles.inputGoalContainer}>
            <TextInput 
                style={styles.textInput}
                placeHolder='Your TO-DO list goals'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
                <View style={styles.buttonBelowContainer}>
                <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler}/>
                </View>
                <View style={styles.button}>
                <Button title='Cancel'  />
                </View>
                </View>
        </View>
    </Modal>
)
}

export default GoalInput;

const styles = StyleSheet.create({
      inputGoalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomColor: 'black',
        padding: 20,
    },
    textInput: {
      padding: 20,
      borderWidth: 1,
      borderColor: 'brown',
      width: '70%',
      marginRight: 10,
      
    },
    buttonBelowContainer: {
      flexDirection: "row",
      marginTop: 10,
    },
    button: {
      width: '30%',
      marginHorizontal: 10,
    }
})



