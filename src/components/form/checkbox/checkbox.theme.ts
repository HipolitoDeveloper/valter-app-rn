const CheckboxTheme = {
    baseStyle: {
        _icon: {
            color: "transparent", // change to your preferred color
        },
    },
    defaultProps: {
        size: "md",
    },
    variants: {
        search: {
            _icon: {
                backgroundColor: "transparent",
                borderRadius: "full",

            },
            control: {
                borderWidth: 1012
            }
        },
    },
}
export default CheckboxTheme