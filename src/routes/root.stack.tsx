import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AuthStack from "./auth.stack";
import AppStack from "./app.stack";

const Stack = createNativeStackNavigator()

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='Auth' component={AuthStack} />
        {/*<Stack.Screen name='Splash' component={() => <></>} options={{ headerShown: false }}/>*/}
        <Stack.Screen name='App' component={AppStack} />
    </Stack.Navigator>
)

export default RootStack