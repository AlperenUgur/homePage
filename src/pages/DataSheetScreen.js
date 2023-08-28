import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function DataSheet(){
    return(
        <View>
            <Text style ={styles.text}>
               Data sheet ekranı
            </Text>
        </View>
    )
}
export default DataSheet;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'

    }
})