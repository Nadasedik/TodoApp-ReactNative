import { StyleSheet, Text, View ,TextInput,TouchableOpacity,
    LayoutAnimation,
    NativeModules,
    Modal,
    TouchableWithoutFeedback,} from 'react-native';
import { useState } from "react";
import { Button, Snackbar } from 'react-native-paper';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const AddTodos=({onTodoAdd})=>{

 const [todoTitle,setTodoTitle]=useState('')
 const [visible, setVisible] = useState(false);
 const [focused, setFocused] = useState(false);

 const textChangeHandler = (text)=>{
     
    setTodoTitle(text)
  }
  const focusHandler = () => {
    LayoutAnimation.spring();
    setFocused(true);
  };
  const blurHandler = () => {
    LayoutAnimation.spring();
    setFocused(false);
  };
 addBtnPressHandler=()=>{
     if(todoTitle!='')
   { let todo = {
        title:todoTitle,
        done:false
    }
    console.log(todo)
    setTodoTitle('')
    onTodoAdd(todo)
    }
    
 }
 const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

    return(
        <View >
            <Text style={styles.header}>
                Add Todo?!
            </Text>
            <View style={styles.addTodoContainer}>
                <TextInput placeholder='Add new Todo'
                onChangeText={textChangeHandler}
                value={todoTitle}
                onFocus={focusHandler}
                onBlur={blurHandler}
                style={{ ...styles.input, ...(focused ? styles.inputFocused : {}) }}/>
                
                <TouchableOpacity 
                 style={styles.btnContainer}
                onPress={() => todoTitle?addBtnPressHandler():onToggleSnackBar()}>
                    <Text style={styles.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
      <Snackbar
      style={{width:'80%',marginLeft:30}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {

          },
        }}>
       Please Add new Todo
      </Snackbar>
       
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }, 
    addTodoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
    },
    header: {
    backgroundColor: "#8915be",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    fontSize: 24,
    marginBottom:20
  },
    input: {
      fontSize: 16,
      borderBottomColor: "grey",
      borderBottomWidth: 2,
      padding: 0,
    },
    inputFocused: {
      flexGrow: 1,
      marginRight: 5,
    },
    btnContainer: {
      backgroundColor: "#8915be",
      width: "27%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    btnText: {
      color: "white",
      textAlign: "center",
      alignSelf: "center",
      fontSize: 18,
    },
  });
export default AddTodos;