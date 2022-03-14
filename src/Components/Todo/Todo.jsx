import { StyleSheet, Text, View, FlatList } from 'react-native';
// import CheckBox from "expo-checkbox";
import { useState } from "react";
import { Checkbox ,IconButton,Colors} from 'react-native-paper';
const Todo = ({ info , Update,rmv}) => {
    
 //const [check, setCheck] = useState(info.done)

    return (
        <View style={styles.itemContainer}>

            <Text style={{ ...styles.itemTitle, ...(info.done ? { textDecorationLine: 'line-through' } : {}) }}
            >
                {info.title}</Text>
            {/* <CheckBox
                style={styles.itemCheckBox}
                value={check}
                onValueChange={handleCheck}
            /> */}
            <Checkbox
                status={info.done ? 'checked' : 'unchecked'}
                onPress={()=>Update(info)}
            />
            <IconButton
                icon="delete"
                color={Colors.red500}
                size={20}
                onPress={()=>rmv(info.title)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginBottom:10,
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
export default Todo;