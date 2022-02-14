import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AddIcon from '@mui/icons-material/Add'

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: '#003049',
    color: '#EAE2B7'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Great Vibes',
    color: '#EAE2B7',
    '&:visited': {
      color: '#EAE2B7'
    }
  }
})

function Header() {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.typography} variant="h4" sx={{ flexGrow: 1 }}>
            <Link to="/" className={classes.link}>
              E-shop
            </Link>
          </Typography>
          <Box>
            <Button variant="inherit" startIcon={<AddIcon />} onClick={() => navigate('/add')}>
              Create game
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
