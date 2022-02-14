import React from 'react'
import { Container, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  paper: {
    minHeight: '20vh',
    padding: 20,
    backgroundColor: '#F77F00'
  }
})

function Commercial() {
  const classes = useStyles()

  return (
    <Paper>
      <Container maxWidth="xl" className={classes.paper}>
        <Typography variant="h3" color="#003049">
          You can create your own game!
        </Typography>
        <Typography variant="h5" color="#EAE2B7" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Container>
    </Paper>
  )
}

export default Commercial
