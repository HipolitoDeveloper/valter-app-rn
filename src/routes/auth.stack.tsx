import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SigninScreen from "../screens/signin.screen";
import SignupScreen from "../screens/signup.screen";

const Stack = createNativeStackNavigator()

const AuthStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name='Signin' component={SigninScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />

    </Stack.Navigator>
)

export default AuthStack