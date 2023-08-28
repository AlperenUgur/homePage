import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function EmployeeScreen(){
    return(
        <View>
            <Text style ={styles.text}>
               personel ekranı sayfası
            </Text>
        </View>
    )
}
export default EmployeeScreen;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})