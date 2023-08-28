import useEnvironment from "./useEnvironment";
import {SafeParseReturnType} from "zod/lib/types";
import {ZodError} from "zod";

export interface IUseDefaultValuesParams {
    props: { error?: ZodError, data?: any },
    formSchemaName: string
}

const useDefaultValues = (props: IUseDefaultValuesParams['props'], formSchemaName: IUseDefaultValuesParams['formSchemaName']) => {
    const {isDevelopment} = useEnvironment()

    if (props?.error) {
        console.error(`[DEFAULT VALUE SAFE PARSE ERROR ${formSchemaName}]`, JSON.stringify(props.error))
        return {}
    }

    return props.data
}

export default useDefaultValues