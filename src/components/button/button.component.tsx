import {IButtonProps, Button as ButtonRN, Center} from "native-base";
import React from "react";

interface IButton extends IButtonProps {
    children: React.ReactNode,
}

const Button: React.FC<IButton> = ({
                                       children,
                                       ...props
                                   }) => {


    return (
        <ButtonRN {...props} >
            <Center>
                {children}
            </Center>
        </ButtonRN>
    )
}

export default Button