import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

import {ListGoal} from '../App';

const inputPlaceholder = 'Your goal!';

interface PropsI {
    addGoalHandler: (value: ListGoal) => void;
}


function InputContainer ({ addGoalHandler}: PropsI) {
    const [placeholder, setPlaceholder] = useState<string>(inputPlaceholder);
    const [newGoal, setNewGoal] = useState<ListGoal | ''>('');

    function addNewGoalHandler(){
        addGoalHandler(newGoal);
        setNewGoal('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={placeholder} 
                style={styles.textInput}
                onChangeText={(newGoal:ListGoal) => setNewGoal(newGoal)}
                onFocus={() => setPlaceholder('')}
                onEndEditing={()=> setPlaceholder(inputPlaceholder)}
                value={newGoal}
            />
            <Button title='Add goal' onPress={addNewGoalHandler}/>
        </View>
    )
};

export default InputContainer;

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
        paddingTop: 48,
        paddingBottom: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ebeced',
      },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginRight: 8,
        padding: 8,
    }
})