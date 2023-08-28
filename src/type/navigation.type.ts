import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';


export type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    App: NavigatorScreenParams<AppStackParamList>;
};

export type AuthStackParamList = {
    Signin: undefined,
    Signup: undefined,
};

export type SigninScreenProps = CompositeScreenProps<
    StackScreenProps<AuthStackParamList, 'Signin'>,
    StackScreenProps<RootStackParamList>
>

export type SignupScreenProps = CompositeScreenProps<
    StackScreenProps<AuthStackParamList, 'Signup'>,
    StackScreenProps<RootStackParamList>
>

export type AppStackParamList = {
    AppBottomTab: NavigatorScreenParams<AppBottomTabParamList>,
};

export type AppBottomTabParamList = {
    ShoppingList: undefined,
};

export type ShoppingListScreenProps<T extends keyof AppBottomTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<AppBottomTabParamList, T>,
    StackScreenProps<RootStackParamList>
>


declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}