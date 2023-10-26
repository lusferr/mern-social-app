import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MyForm from './MyForm';

export default function Login() {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const primaryLight = theme.palette.primary.light;
    return (
        <Box>
            <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
                <Typography
                    fontWeight='bold'
                    fontSize='32px'
                    color='primary'
                >
                    Social
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography
                    fontWeight='500'
                    variant="h4"
                    sx={{mb: "1.5rem"}}
                >
                    Bem-vindo à Social!
                </Typography>
                <MyForm />
            </Box>
        </Box>
    )
}