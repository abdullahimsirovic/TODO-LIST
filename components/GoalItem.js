import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
            <Pressable
             onPress={props.onDeleteItem.bind(this, props.id)}
             style={({pressed}) => pressed && styles.presedItem}
            >
            <View style={styles.enteredGoalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
            </View>
            </Pressable>
          
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    enteredGoalItem:{
        margin: 9,
        borderRadius: 8,
        backgroundColor: 'purple',
        color: 'black',
        padding: 8,
        opacity: 1
      },
      goalText: {
        color: 'Black',
        padding: 5,
      },
    itemOnPress: {
        opacity: 0.8,
    }
})

