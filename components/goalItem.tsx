import { StyleSheet, View, Text, Pressable } from "react-native";
import { ListGoal } from "../App";

interface PropsI {
    item: ListGoal,
    deleteItem: (goal:ListGoal) => void
}

const GoalItem = ({item, deleteItem}: PropsI) => {
    const pressHandler = () => {
        console.log('huj')
    }

    return (
        <Pressable onPress={pressHandler} onLongPress={() => deleteItem(item)}>
            <View style={styles.singleGoal}>
                <Text>{item}</Text>
            </View>
        </Pressable>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    singleGoal: {
        marginBottom: 8,
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#dae028',
    }
})