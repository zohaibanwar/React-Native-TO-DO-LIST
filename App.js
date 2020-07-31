import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert , TouchableWithoutFeedback , Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {

  const[todos , setTodos] = useState([
    {text : 'Buy coffee' , key : '1'},
    {text : 'Create an App' , key : '2'},
    {text : 'Play on the Switch' , key : '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key!=key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return[
          { text: text , key: Math.random().toString()},
          ...prevTodos
        ];
      });
    }
    else {
      Alert.alert('OOPS !', 'Item Name must be over 3 Characters' , [
        {text: 'OK' , onPress: () => console.log('Alert Closed')}
      ]);
    }
    }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Keyboard Dismissed');
    }}>

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodo submitHandler={ submitHandler } />
        <View style={styles.list}>
          {/* list */}

          <FlatList 
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={ item } pressHandler={pressHandler} />
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },


content: {
  padding: 40,
  flex: 1,
},

list: {
  flex: 1,
  marginTop: 20,
},
});