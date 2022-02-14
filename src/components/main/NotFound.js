import { Typography, Box, Container } from '@mui/material'
import React from 'react'

function NotFound(props) {
  return (
    <Container maxWidth="sm" fixed>
      <Box sx={{ height: '100vh' }}>
        <Typography align="center" variant="h3">
          This page does not yet exist {':)'}
        </Typography>
      </Box>
    </Container>
  )
}

export default NotFound
