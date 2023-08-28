import {IButtonProps} from "native-base";

const ButtonTheme = {
    variants: {
        rounded: ({width, height, backgroundColor}: IButtonProps) => ({
            width: width ?? '80%',
            height: height ?? '40px',
            borderRadius: 20,
            backgroundColor: backgroundColor ?? 'blue.100'
        }),
    },
    defaultProps: {
    }
}
export default ButtonTheme