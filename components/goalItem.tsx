import { StyleSheet, View, Text } from "react-native";
import { ListGoal } from "../App";

interface PropsI {
    item: ListGoal
}

const GoalItem = ({item}: PropsI) => {
    return (
        <View style={styles.singleGoal}>
            <Text>{item}</Text>
        </View>
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