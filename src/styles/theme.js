import { background, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#e8f4ed', 
                color: 'white', 
                lineHeight: 'base',
            },
        },
    },
});
export default theme;