import React from "react";
import {Box, FormControl, IInputProps, Input as InputRN, Text, WarningOutlineIcon} from "native-base";
import {Control, Controller, FieldError, FieldValues} from "react-hook-form";
import {StyleProp} from "react-native";

interface IInput extends IInputProps {
    isForm: boolean,
    labelText?: string,
    labelColor?: string,
    fieldError?: FieldError,
    control?: Control<any>,
    name: string,
    boxStyle?: StyleProp<any>

}

const Input: React.FC<IInput> = ({
                                     isForm,
                                     labelText,
                                     labelColor,
                                     fieldError,
                                     placeholder,
                                     onChangeText,
                                     onEndEditing,
                                     control,
                                     name,
                                     type,
                                     variant,
                                     boxStyle,
                                     ...props
                                 }) => {

    const isInvalid = !!fieldError

    const renderFormInput = (
        <Controller control={control}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <Box {...boxStyle}>

                            <FormControl.Label>
                                <Text color={!invalid ? 'blue.100' : 'red.100'}
                                      fontSize='md'>
                                    {labelText && labelText}
                                </Text>
                            </FormControl.Label>

                            <InputRN
                                onChangeText={onChange}
                                value={value}
                                placeholder={placeholder}
                                variant={variant}
                                isInvalid={invalid}
                                type={type}
                                {...props}
                            />


                            {/*<FormControl.ErrorMessage isInvalid={invalid} color='blue.100'*/}
                            {/*                          leftIcon={<WarningOutlineIcon size="xs"/>}>*/}
                            {/*    {error?.message}*/}
                            {/*</FormControl.ErrorMessage>*/}
                        </Box>

                    )} name={name}/>
    )

    const renderDefaultInput = (
        <Box style={boxStyle}>
            <InputRN placeholder={placeholder} onEndEditing={onEndEditing} onChangeText={onChangeText} variant={variant}
                     {...props}/>
        </Box>
    )


    return isForm ? renderFormInput : renderDefaultInput
}

export default Input