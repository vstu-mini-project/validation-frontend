import * as React from "react";
import HeaderComponent from "./components/Header/HeaderComponent"
import DocumentComponent from "./components/Document/DocumentComponent"
import { Box } from "@mui/system";

export default function App() {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%'
            }}>
            <HeaderComponent />
            <DocumentComponent />
        </Box>
    );
}
