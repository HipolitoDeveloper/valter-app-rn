import React from "react";
import {useLayout} from "../../../hooks/useLayout";
import {useGenericMutation} from "../../../hooks/useApollo";
import {useLogInMutation, useSignUpMutation} from "../auth.graphql.generated";
import {useForm} from "react-hook-form";
import {SSigninForm, TSigninForm} from "../signin/signin.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import useDefaultValues from "../../../hooks/useDefaultValues";
import {SSignupForm, TSignupForm} from "./signup.schema";
import {Center, Flex, FormControl, HStack, Text, VStack} from "native-base";
import {MaterialIcons} from "@expo/vector-icons";
import Input from "../../../components/form/input/input.component";
import Button from "../../../components/button/button.component";
import {useNavigation} from "@react-navigation/native";
import {SignupScreenProps} from "../../../type/navigation.type";
import useAuth from "../../../hooks/useAuth";
import {TAuthUser} from "../../../type/user.type";

const Signup: React.FC = () => {
    const defaultValues = useDefaultValues(SSignupForm.safeParse({
        name: 'Teste Name',
        username: 'gabriel@gmail.com',
        password: '123456'
    },), 'SignupSchema');

    const {
        handleSubmit,
        control,
    } = useForm<TSignupForm>({
        resolver: zodResolver(SSignupForm),
        defaultValues: defaultValues
    })

    const {genericBaseOptions, extractMutationResponseData} = useGenericMutation({})
    const [signUp] = useSignUpMutation({
        ...genericBaseOptions
    })

    const {navigate} = useNavigation<SignupScreenProps['navigation']>()
    const {handleLoading} = useLayout()
    const {storeUser} = useAuth()

    const handleSignup = async (formData: TSignupForm) => {
        handleLoading(true)
        const mutationResponse = await signUp({
            variables: {
                input: {
                    fields: {
                        ...formData,
                        email: formData.username
                    }
                }
            }
        })

        const data = extractMutationResponseData<TAuthUser>(mutationResponse)
        if (data)
            storeUser(data)

    }

    return (
        <Center h='100%'>
            <Flex h='50%' w='100%' alignItems={'center'} justifyContent={'space-between'}>
                <Center>
                    <MaterialIcons name="kitchen" size={54} color="#4ABFBF"/>
                </Center>

                <FormControl>
                    <VStack alignItems={'center'} justifyContent={'space-between'} h='80%'>
                        <Input isForm={true}
                               variant={'underlined'}
                               labelText={'Nome'}
                               labelColor='blue.100'
                               placeholder={'Digite seu nome'}
                               w='80%'
                               name='name'
                               control={control}
                               type={'text'}
                        />

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
                            <Text color='blue.100' onPress={() => navigate('Signin')}>Já tenho uma conta!</Text>
                        </HStack>


                        <Button variant={'rounded'} w='80%' h='42px' onPress={handleSubmit(handleSignup)}>
                            <Text fontSize={'md'} color={'white.100'}>Cadastre-se</Text>
                        </Button>
                    </VStack>
                </FormControl>
            </Flex>
        </Center>
    )


}

export default Signup