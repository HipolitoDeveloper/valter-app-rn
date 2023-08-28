import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppBottomtab from "./app.bottomtab";

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <Stack.Navigator initialRouteName='AppBottomTab' screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='AppBottomTab' component={AppBottomtab}/>
    </Stack.Navigator>
)

export default AppStack