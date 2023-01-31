import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

const inputPlaceholder = 'Your goal!';
type ListGoal = string;

export default function App() {
  const [newGoal, setNewGoal] = useState<ListGoal>('');
  const [placeholder, setPlaceholder] = useState<string>(inputPlaceholder);
  const [listGoals, setListGoals] = useState<ListGoal[] | []>([]);
  function goalInputHandler(enteredText: string){
    setNewGoal(enteredText);
  };

  function addGoalHandler(){
    setListGoals((listGoals) => [...listGoals, newGoal]);
    setNewGoal('');
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder={placeholder} 
          style={styles.textInput}
          onChangeText={goalInputHandler}
          onFocus={() => setPlaceholder('')}
          onEndEditing={()=> setPlaceholder(inputPlaceholder)}
        />
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={listGoals}
          renderItem={(itemData) => (
            <View style={styles.singleGoal}>
              <Text>{itemData.item}</Text>
            </View>
          )}
          keyExtractor = {(item, index) => `${item}${((Math.random() * 1000)/1000).toString}`}
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
  inputContainer: {
    flex: 1,
    marginBottom: 16,
    paddingTop: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ebeced',
  },
  textInput: {
    flex: 3,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
    paddingHorizontal: 16,
  },
  singleGoal: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#dae028',
  }
});
