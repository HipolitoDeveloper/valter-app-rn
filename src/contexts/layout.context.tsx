import React, {createContext, useState} from "react";
import {Box, Flex, useDisclose} from "native-base";
import ErrorSlider, {IErrorSlideProps} from "../components/layout/error/slideError.component";
import {StatusBar} from "expo-status-bar";
import Loading from "../components/layout/loading.component";
import {SafeAreaView} from "react-native";

interface ILayoutContext {
    handleError(errorProps: IErrorSlideProps): void;

    // handleSuccessDialog(props: ISuccessDialog): void;
    handleLoading(state: boolean): void;

    beforeAsyncFunction(): void;
}

const LayoutContext = createContext({} as ILayoutContext);

const LayoutProvider = ({children}: { children: React.ReactNode }) => {
    const {isOpen: isSuccessOpen, onClose: onCloseSuccess, onOpen: onOpenSuccess} = useDisclose(false)

    const [loading, setLoading] = useState<boolean>(false);
    const [errorProps, setErrorProps] = useState<IErrorSlideProps>({
        isOpen: false,
    })

    const handleLoading = (state: boolean) => {
        setLoading(state)
    }

    const beforeAsyncFunction = () => {
        handleLoading(true)
        handleError({
            isOpen: false,
        })
    }


    const handleError = (errorNewProps: IErrorSlideProps) => {
        setErrorProps(state => ({
            ...state,
            ...errorNewProps
        }))
    }

    const contextValues = {
        handleError,
        handleLoading,
        beforeAsyncFunction
    }

    return (
        <LayoutContext.Provider value={contextValues}>
            <Loading loading={loading}/>
            <StatusBar style="auto"/>
            <Flex flex={1} >
                    <ErrorSlider {...errorProps}/>
                    {children}
            </Flex>

        </LayoutContext.Provider>
    )
}

export {LayoutProvider, LayoutContext}