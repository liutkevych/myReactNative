import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import InputContainer from './components/goalInput';
import GoalItem from './components/goalItem';


export type ListGoal = string;
export type ListGoalList = ListGoal[] | [];

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
    const [listGoals, setListGoals] = useState<ListGoalList>([]);

    function addGoalHandler(newGoal:ListGoal){
        setListGoals((listGoals) => [...listGoals, newGoal]);
    }
    function deleteItem (item: ListGoal){
        console.log(`${item} was deleted from the list`);
        setListGoals(prevGoals => prevGoals.filter(goal => goal !== item));
    }
    function startAddFunc(){
        setModalIsVisible(true);
    }
    
    return (
        <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
                <Button title='Add' onPress={startAddFunc}/>
            </View>
            <InputContainer 
                addGoalHandler={addGoalHandler}
                visible={modalIsVisible}
                setVisible={setModalIsVisible}
            />
            <View style={styles.goalsContainer}>
            <FlatList 
                data={listGoals}
                renderItem={(itemData) => <GoalItem 
                    item={itemData.item}
                    deleteItem={deleteItem}
                /> }
                keyExtractor = {(item, index) => Math.random().toString()}
                alwaysBounceVertical={false}
            />
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        marginTop: 50
    },
    goalsContainer: {
        flex: 5,
        paddingHorizontal: 16,
    },
    headerContainer: {
        marginBottom: 8
    }
});
