import React from "react";
import {Box, FormControl, Select as SelectRN, ISelectProps, Text, WarningOutlineIcon} from "native-base";
import {Control, Controller, FieldError, FieldValues} from "react-hook-form";
import {SelectContext} from "native-base/lib/typescript/components/primitives/Select/Select";

interface ISelect extends ISelectProps {
    isForm: boolean,
    labelText?: string,
    labelColor?: string,
    fieldError?: FieldError,
    control?: Control<any>,
    name?: string,
    value: string,
    items: {
        label: string,
        value: string
    }[]

}

const Select: React.FC<ISelect> = ({
                                       isForm,
                                       labelText,
                                       labelColor,
                                       fieldError,
                                       placeholder,
                                       onValueChange,
                                       control,
                                       name,
                                       value,
                                       variant,
                                       items,
                                       ...props
                                   }) => {

    const isInvalid = !!fieldError

    const renderFormSelect = (
        <Controller control={control}
                    render={({field: {onChange, value}, fieldState: {error, invalid}}) => (
                        <Box w='70px' >
                            <FormControl.Label>
                                <Text color={!invalid ? 'blue.100' : 'red.100'}
                                      fontSize='md'>
                                    {labelText && labelText}
                                </Text>
                            </FormControl.Label>

                            <SelectRN
                                onValueChange={onChange}
                                selectedValue={value}
                                placeholder={placeholder}
                                variant={variant}
                                {...props}
                            >
                                {items.map(({label, value}) => (
                                    <SelectRN.Item label={label} value={value} key={label}/>
                                ))}
                            </SelectRN>

                            {/*<FormControl.ErrorMessage isInvalid={invalid} color='blue.100'*/}
                            {/*                          leftIcon={<WarningOutlineIcon size="xs"/>}>*/}
                            {/*    {error?.message}*/}
                            {/*</FormControl.ErrorMessage>*/}
                        </Box>

                    )} name={name ?? ''}/>
    )

    const renderDefaultSelect = (
        <SelectRN placeholder={placeholder} onValueChange={onValueChange}
                  selectedValue={value} variant={variant}
                  {...props}>
            {items.map(({label, value}) => (
                <SelectRN.Item label={label} value={value} key={label}/>
            ))}
        </SelectRN>
    )


    return isForm ? renderFormSelect : renderDefaultSelect
}

export default Select