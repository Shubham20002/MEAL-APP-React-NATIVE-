import {View,Text,FlatList} from 'react-native';
import { MEALS,CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/mealItem';
function MealsOverviewScreen({route,navigation}){
    const catId=route.params.categoryId;

    const displayedMeals=MEALS.filter((meal)=>{
    return meal.categoryIds.indexOf(catId)>=0})


    const ItemTitle=CATEGORIES.find((category)=> category.id=catId).title
    navigation.setOptions({
        title:ItemTitle
    })
    function renderMealitem(itemData){
        return <MealItem title={itemData.item.title} 
        imagUrl={itemData.item.imageUrl}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        id={itemData.item.id}/>
    }
    return(
        <View>
            <FlatList
            data={displayedMeals}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealitem}
            />
        </View>
    )

}

export default MealsOverviewScreen;