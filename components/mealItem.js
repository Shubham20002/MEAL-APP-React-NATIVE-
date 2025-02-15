import { View,Text, Pressable,StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealItem({id,title,imagUrl,affordability,complexity,duration}){
const navigation=useNavigation();
function selectMealItemHandler(){
    navigation.navigate('MealDetails',{mealId:id})
}

    return(
        <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}} onPress={selectMealItemHandler}>
        <View>
            <Image source={{uri:imagUrl}} style={styles.image}/>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
        </Pressable>
        </View>
            )
}

const styles=StyleSheet.create({
    mealItem:{
        backgroundColor:'white',
        margin:16,
        borderRadius:8,
        overflow:'hidden',
      
    },
    image:{
        width:'100%',
        height:200
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        margin:8,
        textAlign:'center'
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:2
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12

    }
})

export default MealItem;