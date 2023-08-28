import {extendTheme} from "native-base";
import ButtonTheme from "../components/button/button.theme";
import InputTheme from "../components/form/input/input.theme";
import TextTheme from "../components/text/text.theme";
import SelectTheme from "../components/form/select/select.theme";
import CheckboxTheme from "../components/form/checkbox/checkbox.theme";

const colors = {
    blue: {
        50: '#B6CECE',
        100: "#4ABFBF",
        200: "#843349",
    },
    grey: {
        100: '#e1e1e1',
        200: '#d7d6d6'
    },
    black: {
        100: '#000000'
    },
    white: {
        100: '#FFFFFF'
    },
    red: {
        100: '#dc2626'
    }
};

const typography = {
    letterSpacings: {
        "xs": "-0.05em",
        "sm": "-0.025em",
        "md": 0,
        "lg": "0.025em",
        "xl": "0.05em",
        "2xl": "0.1em",
    },
    lineHeights: {
        "2xs": "1em",
        "xs": "1.125em",
        "sm": "1.25em",
        "md": "1.375em",
        "lg": "1.5em",
        "xl": "1.75em",
        "2xl": "2em",
        "3xl": "2.5em",
        "4xl": "3em",
        "5xl": "4em",
    },
    fontConfig: {
        Inter: {
            100: {
                normal: "Inter-Regular",
            },

            700: {
                normal: 'Inter-Black',
            },

        },
    },
    fonts: {
        heading: 'Inter.',
        body: 'Inter',
        mono: undefined,
    },
    fontSizes: {
        "2xs": 10,
        "xs": 12,
        "sm": 14,
        "md": 16,
        "lg": 18,
        "xl": 20,
        "2xl": 24,
        "3xl": 30,
        "4xl": 36,
        "5xl": 48,
        "6xl": 60,
        "7xl": 72,
        "8xl": 96,
        "9xl": 128,
    },
};

const opacity = {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
};

const shadows = {
    0: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    1: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    3: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    4: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    5: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    6: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    7: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    8: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    9: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
};

const components = {
    Button: ButtonTheme,
    Text: TextTheme,
    Select: SelectTheme,
    Input: InputTheme,
    Checkbox: CheckboxTheme
}

const theme = extendTheme({colors: colors, components, ...typography});

export default theme