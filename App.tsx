import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import InputContainer from './components/goalInput';
import GoalItem from './components/goalItem';


export type ListGoal = string;
export type ListGoalList = ListGoal[] | [];

export default function App() {
    const [listGoals, setListGoals] = useState<ListGoalList>([]);

    function addGoalHandler(newGoal:ListGoal){
        setListGoals((listGoals) => [...listGoals, newGoal]);
    }
    
    return (
        <View style={styles.appContainer}>
            <InputContainer 
                addGoalHandler={addGoalHandler}
            />
            <View style={styles.goalsContainer}>
            <FlatList 
                data={listGoals}
                renderItem={(itemData) => <GoalItem item={itemData.item}/> }
                keyExtractor = {(item, index) => Math.random().toString()}
                alwaysBounceVertical={false}
            />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    goalsContainer: {
        flex: 5,
        paddingHorizontal: 16,
    }
});
