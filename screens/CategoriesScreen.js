import { View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import ComponentGrid from "../components/componentGrid";



function CategoriesScreen({navigation}) {
 
  function renderCategoryItem(itemData) {
    function handlePress(){
      navigation.navigate('MealsOverview',{categoryId:itemData.item.id})
    }
    return (
      <ComponentGrid title={itemData.item.title} color={itemData.item.color} onPress={handlePress} />
    );
  }
  return (
    <View >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
       numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
