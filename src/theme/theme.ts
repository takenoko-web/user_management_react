import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        //グローバルなcssであることを明示
        global: {
            body: {
                //chakla ui の指定法 .数字で大きいほど濃い
                backgroundColor: "gray.100",
                color: "gray.800"
            }
        }
    }
});

export default theme;