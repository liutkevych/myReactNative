import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Pressable, Image } from "react-native";

import {ListGoal} from '../App';

const inputPlaceholder = 'Your goal!';

interface PropsI {
    addGoalHandler: (value: ListGoal) => void;
    visible: boolean,
    setVisible: (val: boolean) => void;
}


function InputContainer ({ addGoalHandler, visible, setVisible}: PropsI) {
    const [placeholder, setPlaceholder] = useState<string>(inputPlaceholder);
    const [newGoal, setNewGoal] = useState<ListGoal | ''>('');

    function addNewGoalHandler(){
        addGoalHandler(newGoal);
        setNewGoal('');
        setVisible(false);
    }
    function closeModal(){
        setVisible(false);
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.closeButtonContainer}>
                <Button title='X' onPress={closeModal}/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={placeholder} 
                    style={styles.textInput}
                    onChangeText={(newGoal:ListGoal) => setNewGoal(newGoal)}
                    onFocus={() => setPlaceholder('')}
                    onEndEditing={()=> setPlaceholder(inputPlaceholder)}
                    value={newGoal}
                />
                <Pressable onPress={addNewGoalHandler}>
                    <Image 
                        style={styles.addButton}
                        source={require('../assets/images/basket.png')} 
                    />
                </Pressable>
            </View>
        </Modal>
    )
};

export default InputContainer;

const styles = StyleSheet.create({
    closeButtonContainer: {
        position: 'absolute',
        top: 40,
        right: 16,
        zIndex: 100
    },
    inputContainer: {
        marginBottom: 16,
        paddingTop: 78,
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
    },
    addButton: {
        width: 24,
        height: 24
    }
})