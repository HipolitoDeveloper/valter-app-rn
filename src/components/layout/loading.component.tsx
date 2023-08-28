import React from "react";
import {Center, HStack, Modal, Spinner} from "native-base";

interface ILoadingProps {
    loading: boolean
}

const Loading: React.FC<ILoadingProps> = ({
                                              loading
                                          }) => {
    return (
        <Modal isOpen={loading}>
            <Spinner color={'blue.500'} size='md'/>
        </Modal>
    )
}

export default Loading