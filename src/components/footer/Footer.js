import React from 'react'
import { Grid, Box, Container, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useStyles } from './FooterStyels'

function Footer() {
  const classes = useStyles()
  return (
    <Box px={{ xs: 2, sm: 4 }} py={{ xs: 2, sm: 4 }} className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Box borderBottom={1} pb={{ xs: 1 }}>
              Information
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Our company
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Data
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Contact us
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box borderBottom={1} pb={{ xs: 1 }}>
              Legal
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Terms {'&'} Conditions
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Privacy Police
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Legality
              </Link>
            </Box>
            <Box>
              <Link to="/notFound" className={classes.link}>
                Author License
              </Link>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box borderBottom={1} pb={{ xs: 1 }}>
              Subscribe
            </Box>
            <Box textAlign="center">
              <IconButton>
                <Link to="/notFound">
                  <InstagramIcon className={classes.icon} />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/notFound">
                  <TwitterIcon className={classes.icon} />
                </Link>
              </IconButton>
              <IconButton>
                <Link to="/notFound">
                  <FacebookIcon className={classes.icon} />
                </Link>
              </IconButton>
            </Box>
            <Box textAlign="center" mt={1}>
              <Link to="/" className={classes.italicLink}>
                E-shop
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box textAlign="center">
              Made by{' '}
              <a href="https://github.com/Olyathecute" target="_blank" className={classes.italicLink}>
                Olyathecute
              </a>
              <Box>2022</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
