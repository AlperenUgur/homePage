import { View } from "native-base";
import React from "react";

import { StyleSheet ,Text} from "react-native";

function HomeScreen(){
    return(
        <View>
            <Text style ={styles.text}>
               Anasayfa
            </Text>
        </View>
    )
}
export default HomeScreen;


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})