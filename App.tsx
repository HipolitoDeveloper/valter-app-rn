import {NavigationContainer} from "@react-navigation/native";
import RootStack from "./src/routes/root.stack";
import React from "react";
import {NativeBaseProvider} from "native-base";
import theme from "./src/theme/theme";
import {useFonts} from "expo-font";
import {ApolloProvider} from "@apollo/client";
import apollo from "./src/config/apollo";
import {LayoutProvider} from "./src/contexts/layout.context";
import {AuthProvider} from "./src/contexts/auth.context";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./src/assets/fonts/Inter/Inter-Black.ttf'),
        'Inter-Regular': require('./src/assets/fonts/Inter/Inter-Regular.ttf'),
    });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);
    //
    if (!fontsLoaded) {
        return null;
    }

    return (
        <ApolloProvider client={apollo}>
            <NativeBaseProvider theme={theme}>
                <LayoutProvider>
                    <AuthProvider>
                        <NavigationContainer>
                            <RootStack/>
                        </NavigationContainer>
                    </AuthProvider>
                </LayoutProvider>
            </NativeBaseProvider>
        </ApolloProvider>
    );
}

