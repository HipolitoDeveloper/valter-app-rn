import React from "react";
import {Center, Flex, FormControl, HStack, Text, VStack} from "native-base";
import Input from "../../../components/form/input/input.component";
import Button from "../../../components/button/button.component";
import {MaterialIcons} from '@expo/vector-icons'
import {useLogInMutation} from "../auth.graphql.generated";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SSigninForm, TSigninForm} from "./signin.schema";
import useEnvironment from "../../../hooks/useEnvironment";
import {useLayout} from "../../../hooks/useLayout";
import {useGenericMutation} from "../../../hooks/useApollo";
import {useNavigation} from "@react-navigation/native";
import useDefaultValues from "../../../hooks/useDefaultValues";
import {SSignupForm} from "../signup/signup.schema";
import useAuth from "../../../hooks/useAuth";
import {SigninScreenProps} from "../../../type/navigation.type";
import Layout from "../../../components/layout/layout.component";
import {TAuthUser, TUser} from "../../../type/user.type";

const Signin: React.FC = () => {
    const defaultValues = useDefaultValues(SSigninForm.safeParse({
        username: 'gabriel@gmail.com',
        password: '123456'
    },), 'SigninSchema');

    const {
        handleSubmit,
        control,
    } = useForm<TSigninForm>({
        resolver: zodResolver(SSigninForm),
        defaultValues: defaultValues
    })


    const {genericBaseOptions, extractMutationResponseData} = useGenericMutation({})
    const [logIn, {data}] = useLogInMutation({
        ...genericBaseOptions
    })

    const {storeUser} = useAuth()
    const {beforeAsyncFunction} = useLayout()
    const {navigate} = useNavigation<SigninScreenProps['navigation']>()

    const handleLogin = async (formData: TSigninForm) => {
        beforeAsyncFunction()
        const mutationResponse = await logIn({
            variables: {
                input: {
                    ...formData
                }
            }
        })

        const data = extractMutationResponseData<TAuthUser>(mutationResponse)
        if (data) {
            await storeUser(data)
            navigate('App', {screen: 'AppBottomTab', params: {screen: 'ShoppingList'}})
        }
    }

    return (
        <Layout>
            <Flex
                h='80%'
                alignItems={'center'}
                justifyContent={'space-around'}>
                <Center>
                    <MaterialIcons name="kitchen" size={54} color="#4ABFBF"/>
                </Center>

                <FormControl>
                    <VStack alignItems={'center'} justifyContent={'space-between'} >
                        <VStack alignItems={'center'} justifyContent={'space-between'} h='60%' w='100%'>
                            <Input isForm={true}
                                   variant={'underlined'}
                                   labelText={'E-mail'}
                                   labelColor='blue.100'
                                   placeholder={'Digite seu e-mail'}
                                   w='80%'
                                   name='username'
                                   control={control}
                                   type={'text'}
                            />
                            <Input isForm={true}
                                   variant={'underlined'}
                                   labelText={'Senha'}
                                   labelColor='blue.100'
                                   placeholder={'Digite sua senha'}
                                   w='80%'
                                   name='password'
                                   control={control}
                                   type={'password'}
                            />

                            <HStack w='80%' justifyContent={'flex-end'}>
                                <Text color='blue.100' onPress={() => navigate('Signup')}>Gostaria de se
                                    cadastrar?</Text>
                            </HStack>
                        </VStack>

                        <Button variant={'rounded'} w='80%' h='42px' onPress={handleSubmit(handleLogin)}>
                            <Text fontSize={'md'} color={'white.100'}>ENTRAR</Text>
                        </Button>
                    </VStack>
                </FormControl>
            </Flex>
        </Layout>
    )
}

export default Signin