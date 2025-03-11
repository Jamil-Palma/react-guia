import { Box, Button, Icon, IconButton } from "@mui/material";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors'

function BotonesEjemplo(){
    return (
        <Box>
            <div>
                <Button variant="text">Text</Button>
            </div>
            <div>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            
            </div>
            <div>
                <Button >
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone"
                // Import the two tones MD variant                           ^^^^^^^^
                />;
                    Salida</Button>
            </div>
            <div>
                <Stack direction="row" spacing={3}>
                <Icon>add_circle</Icon>
                <Icon color="primary">add_circle</Icon>
                <Icon sx={{ color: green[500] }}>add_circle</Icon>
                <Icon fontSize="small">add_circle</Icon>
                <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
                </Stack>
            </div>
        </Box>
    );
}
export default BotonesEjemplo;
