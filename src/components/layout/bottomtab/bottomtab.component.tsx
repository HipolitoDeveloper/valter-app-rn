import React from "react";
import {Box, Center, Flex, Pressable, View} from "native-base";
import {FontAwesome5} from '@expo/vector-icons';
import {Dimensions} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

interface IBottomTab extends BottomTabBarProps {

}

const BottomTab: React.FC<IBottomTab> = ({
                                             state,
                                             descriptors,
                                             navigation
                                         }) => {
    const {width: screenWidth} = Dimensions.get('screen')

    const tabRoute = {
        shoppingList: {...state.routes[0]}
    }

    return (
        <Flex h='6%'
              p='1px'
              backgroundColor={'grey.100'}
              opacity='0.7'
              width='40%'
              position={'absolute'}
              borderRadius={'40%'}
              bottom={10}
              marginLeft={(screenWidth - 0.4 * screenWidth) / 2}
              style={{
                  shadowColor: "#000",
                  shadowOffset: {
                      width: 0,
                      height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
              }}
        >
            <Center w={'30%'} h={'100%'} borderRadius={'40%'} backgroundColor={'transparent'}>
                <Pressable
                    onPress={() => navigation.navigate(tabRoute.shoppingList.name)}
                >
                    <View>
                        <FontAwesome5 name="cart-plus" size={24} color="#4ABFBF"/>
                    </View>
                </Pressable>
            </Center>
        </Flex>
    )
}

export default BottomTab