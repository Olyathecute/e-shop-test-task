import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import GameList from './GameList'
import Commercial from './Commercial'
import SearchElement from './SearchElement'

function Home({ games = [], applyFilter, deleteGame }) {
  return (
    <>
      <Commercial />

      <Box
        sx={{
          m: 2,
          minHight: '65vh',
          textAlign: 'center'
        }}
      >
        <Grid container>
          <Grid item xs={2}>
            <SearchElement applyFilter={applyFilter} />
          </Grid>
          <Grid item xs={10}>
            {games.length ? (
              <GameList games={games} deleteGame={deleteGame} />
            ) : (
              <Typography variant="h4" color="rgba(0, 0, 0, .4)" pt={5}>
                There is nothing here
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
