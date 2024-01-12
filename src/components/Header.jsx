import { AppBar, Box, Typography, Toolbar } from '@mui/material'
import React from 'react'

function Header() {
  return (
   <AppBar position="sticky">
    <Toolbar sx={{display: 'flex', backgroundColor: 'gainsboro', justifyContent: 'space-between'}}>
        <Box color="gray">
            SPLY - YEEZY
        </Box>
        <Typography color="darkgray">Enjoy our discount</Typography>
    </Toolbar>
   </AppBar>
  )
}

export default Header;