import React, {createContext, useState} from "react";
import {Box, useDisclose} from "native-base";
import ErrorSlider, {IErrorSlideProps} from "../components/layout/error/slideError.component";
import {StatusBar} from "expo-status-bar";
import Loading from "../components/layout/loading.component";
import {TAuthUser} from "../type/user.type";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IAuthContext {
    storeUser(authUser: TAuthUser): void,
    authUser: TAuthUser
}

const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [authUser, setAuthUser] = useState<TAuthUser>({
        ACL: {},
        __typename: "User",
        authData: undefined,
        createdAt: undefined,
        email: undefined,
        emailVerified: undefined,
        id: "",
        objectId: "",
        sessionToken: "",
        updatedAt: undefined,
        username: undefined,
        name: ''

    })
    const storeUser = async (authUser: TAuthUser) => {
        setAuthUser(state => ({
            ...state,
            ...authUser
        }))

        await AsyncStorage.setItem('session_token', authUser.sessionToken)
    }

    const contextValues = {
        storeUser,
        authUser
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}