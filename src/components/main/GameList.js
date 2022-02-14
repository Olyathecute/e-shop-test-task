import React from 'react'
import Game from './Game'
import { Container, Typography, Grid, Box } from '@mui/material'

function GameList({ games = [], deleteGame }) {
  return (
    <Box>
      <Typography variant="h3" align="center" color="#003049" gutterBottom>
        Created games
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {games.map((game, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Game game={game} deleteGame={deleteGame} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default GameList
