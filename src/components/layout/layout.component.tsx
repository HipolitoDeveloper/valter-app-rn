import React from "react";
import {Center, Flex, HStack, IFlexProps, Modal, Spinner} from "native-base";

interface ILayoutProps extends IFlexProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    ...props
                                          }) => {
    return (
        <Flex {...props} mt='100px' h='100%' >
            {children}
        </Flex>
    )
}

export default Layout