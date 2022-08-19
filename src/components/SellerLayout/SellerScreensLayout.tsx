import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "../../layout/Header";
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
const SellerScreenLayout=({ children }: any)=>{
    const { t, i18n } = useTranslation();
    const theme = useTheme();
    return(<Grid className="webgColor">
        <Header/>
        <Box component={'div'} dir={i18n.dir()}>
            {children}
        </Box>
    </Grid>)
}
export default SellerScreenLayout