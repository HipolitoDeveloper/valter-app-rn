import React from "react";
import {Control, Controller} from "react-hook-form";
import {Box, FormControl, Text} from "native-base";
import {Checkbox as CheckboxRN} from "native-base";

interface ICheckbox {
    isForm: boolean,
    labelText?: string,
    control?: Control<any>,
    name: string,
    value?: any,
    onChange?: any,
    variant: string
}

const Checkbox: React.FC<ICheckbox> = ({
                                           isForm,
                                           labelText,
                                           control,
                                           name,
                                           value,
                                           onChange,
                                           variant,
                                           ...props
                                       }) => {
    const renderFormCheckbox = (
        <Controller control={control}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <Box {...props}>

                            <FormControl.Label>
                                <Text color={!invalid ? 'blue.100' : 'red.100'}
                                      fontSize='md'>
                                    {labelText && labelText}
                                </Text>
                            </FormControl.Label>

                            <CheckboxRN
                                onChange={onChange}
                                value={value}
                                variant={variant}
                                isInvalid={invalid}
                            />


                            {/*<FormControl.ErrorMessage isInvalid={invalid} color='blue.100'*/}
                            {/*                          leftIcon={<WarningOutlineIcon size="xs"/>}>*/}
                            {/*    {error?.message}*/}
                            {/*</FormControl.ErrorMessage>*/}
                        </Box>

                    )} name={name}/>
    )

    const renderDefaultCheckbox = (
        <CheckboxRN onChange={onChange} variant={variant} value={value}
                    {...props}/>
    )

    return isForm ? renderFormCheckbox : renderDefaultCheckbox
}

export default Checkbox