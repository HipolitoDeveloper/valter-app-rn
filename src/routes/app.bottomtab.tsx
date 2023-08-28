import ShoppingListScreen from "../screens/shoppingList.screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomTab from "../components/layout/bottomtab/bottomtab.component";

const Tab = createBottomTabNavigator()

const AppBottomTab = () => (
    <Tab.Navigator initialRouteName='ShoppingList'
                   screenOptions={{headerShown: false}}
                   tabBar={props => <BottomTab {...props} />}>
        <Tab.Screen name='ShoppingList' component={ShoppingListScreen}/>
    </Tab.Navigator>
)

export default AppBottomTab