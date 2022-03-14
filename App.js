import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todos from './src/Components/Todos/Todos';
import AddTodos from './src/Components/AddTodos/AddTodos';
import { useState } from "react";

export default function App() {
  
  const [todos,setTodos] = useState([
    {
      title: "task 1",
      done: false,
    },
    {
      title: "task 2",
      done: true,
    },
    {
      title: "task 3",
      done: true,
    }
  ]);
  const todoAddHandler = (todo)=>{
    setTodos([...todos,todo]);
  }

  // const remove = (todo)=>{
  //   setTodos('');
  // }
  // const removeTodoHandler=(index)=>{
  //   const newTodos = todos.filter((_,todo)=>todo!==index);
  //   setTodos(newTodos);
  // }
  const removeTodoHandler=(title)=>{
    const newTodos = todos.filter((item)=>item.title!=title);
    setTodos(newTodos);
  }

 const changeStat=(task)=>{
  let updateTodos = todos.map((todo) => {
    if (todo === task) {
      todo.done = !todo.done;
    }
    return todo;
  });
  setTodos(updateTodos)
}

// const removeTodo=(index)=>{
//   let removed= todos.filter((_,todo)=>todo!==index);
//   setTodos(removed)
//   console.log(removed)
// }
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto"/>
      <AddTodos onTodoAdd={todoAddHandler}/>
      <Todos list={todos}  changeStat={changeStat} onTodoDelete={removeTodoHandler}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin:4,
    marginTop:50,
    height:'100%',
  },
});
