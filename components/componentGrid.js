import { Pressable, Text, View,
    StyleSheet
 } from "react-native";

function ComponentGrid({ title, color,onPress }) {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]} >
      <Pressable style={({pressed})=>[styles.button,pressed ? styles.butonPressed :null]} android_ripple={{color:'#ccc'}} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4
    },
    button:{
        flex:1
    },
    butonPressed:{
      opacity:0.5,
      color:'red'
      
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        overflow:'hidden'
    },
    text:{
      fontSize:18,
      fontWeight:'bold'
    }
})
export default ComponentGrid;
