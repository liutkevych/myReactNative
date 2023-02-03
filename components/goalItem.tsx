import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { ListGoal } from "../App";

interface PropsI {
    item: ListGoal,
    deleteItem: (goal:ListGoal) => void
}

const GoalItem = ({item, deleteItem}: PropsI) => {
    const [isActive, setIsActive] = useState(true);
    const pressHandler = () => {
        console.log('huj');
        setIsActive(prevState => !prevState);
    }

    const itemStyle = styles[isActive ? 'singleGoalActive': 'singleGoalInactive'];
    const textStyle = styles[isActive ? 'itemTextActive': 'itemTextInactive'];
    return (
        <View style={itemStyle}>
            <Pressable 
                onPress={pressHandler} 
                onLongPress={() => deleteItem(item)}
                android_ripple={{color: '#cccddd'}} // ripple effect for android
                style={ ({pressed}) =>  pressed && styles.pressedItem} // ripple effect for iOs
            >
            <Text style={textStyle}>{item}</Text>
            </Pressable>
        </View>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    singleGoalActive: {
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: '#dae028',
    },
    singleGoalInactive: {
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: '#cccccc',
    },
    pressedItem: {
        opacity: 0.5
    },
    itemTextActive: {
        margin: 8
    },
    itemTextInactive: {
        margin: 8,
        textDecorationLine: 'line-through'
    }
})