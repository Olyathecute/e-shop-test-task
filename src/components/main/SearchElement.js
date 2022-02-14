import React, { useState } from 'react'
import { Box, Toolbar, FormControl, TextField, Typography, OutlinedInput, InputLabel, MenuItem, Select } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AGES, TYPES } from '../../constants'
import { CssTextField, ColorButton, MenuProps, getStyles, useStyles } from './MainStyles'

function SearchElement({ applyFilter }) {
  const [name, setName] = useState('')
  const [ages, setAges] = useState([])
  const [types, setType] = useState([])
  const theme = useTheme()
  const classes = useStyles()

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeAge = (event) => {
    setAges(event.target.value)
  }

  const handleChangeType = (event) => {
    setType(event.target.value)
  }

  const handleClickApply = () => {
    applyFilter({ ages, types, name })
  }
  const handleClickDiscard = () => {
    setName('')
    setAges([])
    setType([])
    applyFilter({})
  }

  return (
    <Box>
      <Toolbar>
        <Typography variant="h5" color="#003049" align="center">
          Search game
        </Typography>
      </Toolbar>

      <CssTextField label="Name" variant="outlined" onChange={handleChangeName} value={name} sx={{ m: 1 }} fullWidth />

      <FormControl className={classes.formInput} sx={{ m: 1 }} fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
          multiple
          value={ages}
          onChange={handleChangeAge}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {AGES.map((age, index) => (
            <MenuItem key={index} value={age} style={getStyles(index, age, theme)}>
              {age}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formInput} sx={{ m: 1 }} fullWidth>
        <InputLabel>Type</InputLabel>
        <Select
          multiple
          value={types}
          onChange={handleChangeType}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {TYPES.map((type, index) => (
            <MenuItem key={index} value={type} style={getStyles(index, type, theme)}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ColorButton sx={{ m: 1 }} onClick={handleClickApply}>
        Apply
      </ColorButton>
      <ColorButton sx={{ m: 1 }} onClick={handleClickDiscard}>
        Discard
      </ColorButton>
    </Box>
  )
}

export default SearchElement
