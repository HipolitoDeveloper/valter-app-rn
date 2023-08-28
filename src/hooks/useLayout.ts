import {useContext} from "react";
import {LayoutContext} from "../contexts/layout.context";
import {Dimensions} from "react-native";

const useLayout = () => {

    return {
        ...useContext(LayoutContext)
    };
}

const useCentralize = (width: number) => {
    const {width: screenWidth} = Dimensions.get('screen')

    return (screenWidth - width * screenWidth) / 2
}

export {useLayout, useCentralize}