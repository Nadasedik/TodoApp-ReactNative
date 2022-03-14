import { StyleSheet, Text, View ,FlatList} from 'react-native';
// import CheckBox from "expo-checkbox";
import { useState } from "react";
import Todo from './../Todo/Todo'
import { Checkbox ,IconButton,Colors } from 'react-native-paper';

const Todos=({list,changeStat,onTodoDelete})=>{


    return(
        <FlatList
        data={list||[]}
        renderItem={({item:todo}) => (
        <Todo info={todo} Update={changeStat} rmv={onTodoDelete}/>
        
        // <View style={styles.itemContainer}>

        //     <Text style={{ ...styles.itemTitle, ...(todo.done ? { textDecorationLine: 'line-through' } : {}) }}>
        //         {todo.title}</Text>
        //     <Checkbox
        //         status={todo.done ? 'checked' : 'unchecked'}
        //         onPress={()=>changeStat(todo)}
        //     />
        // <IconButton
        //         icon="delete"
        //         color={Colors.red500}
        //         size={20}
        //         onPress={()=>onTodoDelete(todo.title)}
        //         // onPress={onRemove(index)}
        //     />
        // </View>
        )
        }

        keyExtractor={(item,index)=>`${index}`}
        ListHeaderComponent={()=><Text style={styles.listHeader}> {`${list.filter(index=>!index.done).length}  not Completed from ${list.length}`}</Text>}
        ListFooterComponent={()=><Text style={{...styles.listHeader,fontSize:20,marginBottom:100}}>End of list</Text>}
        ItemSeparatorComponent={()=><View style={{borderBottomColor:'black',margin:5,borderBottomWidth:3}}></View>}
      />
    )
}
const styles = StyleSheet.create({
    
      listHeader: {
        textAlign: "center",
        fontSize: 22, 
        fontWeight:'bold',
        backgroundColor: "#8915be",
        color:"white",
        marginTop:30,


      },itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-around",
        padding: 5,
    },
    itemTitle: {
        fontSize: 18,
    },
    itemCheckBox: {
        marginRight: 10,
    },
    checkItem: {
        textDecorationLine: 'line-through',
    }
})
export default Todos;