import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Typography, MenuItem } from '@mui/material'
import { AGES, TYPES, MEDIA } from '../../constants'

import { CssTextField, PrettoSlider, ColorButton } from './MainStyles'

function AddGame({ addGame }) {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({
    name: false,
    age: false,
    type: false
  })
  const [gameState, setGameState] = useState({
    name: '',
    players: [2, 10],
    age: '',
    type: '',
    description: '',
    image: MEDIA[Math.floor(Math.random() * MEDIA.length)]
  })

  const { name, players, age, type, description } = gameState

  const handleChange = (prop) => (event) => {
    setGameState({ ...gameState, [prop]: event.target.value })
  }

  const handleSubmit = () => {
    const newErrors = { name: false, age: false, type: false }
    let hasErrors = false

    if (!name) newErrors.name = hasErrors = true
    if (!age) newErrors.age = hasErrors = true
    if (!type) newErrors.type = hasErrors = true

    if (hasErrors) {
      setErrors(newErrors)
    } else {
      navigate('/')
      addGame(gameState)
    }
  }

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <CssTextField
          error={errors.name}
          fullWidth
          sx={{ m: 1 }}
          label="Name"
          value={name}
          onChange={handleChange('name')}
          helperText={errors.name ? 'Enter name' : ''}
        />

        <Typography color="inherit" gutterBottom sx={{ m: 1 }}>
          Number of players: {players[0]} - {players[1]}
        </Typography>
        <PrettoSlider value={players} onChange={handleChange('players')} valueLabelDisplay="auto" min={2} sx={{ m: 1 }} />

        <Box>
          <CssTextField
            error={errors.age}
            sx={{ m: 1, width: '20ch' }}
            select
            value={age}
            onChange={handleChange('age')}
            label="Age of players"
            helperText={errors.age ? 'Select age' : ''}
          >
            {AGES.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </CssTextField>

          <CssTextField
            error={errors.type}
            sx={{ m: 1, width: '25ch' }}
            select
            value={type}
            onChange={handleChange('type')}
            label="Game type"
            helperText={errors.type ? 'Select game type' : ''}
          >
            {TYPES.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </CssTextField>
        </Box>

        <CssTextField
          fullWidth
          sx={{ m: 1 }}
          value={description}
          label="Game description"
          multiline
          rows={6}
          onChange={handleChange('description')}
        />

        <ColorButton sx={{ m: 1 }} onClick={handleSubmit}>
          Create
        </ColorButton>
      </Box>
    </Container>
  )
}

export default AddGame
