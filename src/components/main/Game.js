import React, { useState } from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { makeStyles } from '@mui/styles'

import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const useStyles = makeStyles({
  text: {
    wordWrap: 'break-word'
  },
  bold: {
    fontWeight: 'bold'
  }
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
}

function Game({ game, deleteGame }) {
  const { name, players, age, type, description, image, _id } = game
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleDeleteGame = () => {
    deleteGame(_id)
    setOpen(false)
  }

  return (
    <>
      <Card onClick={handleOpen}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="game" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap={true}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap={true}>
              {description}&nbsp;
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <BootstrapDialog onClose={handleClose} open={open}>
        <BootstrapDialogTitle onClose={handleClose}>{name}</BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <span className={classes.bold}>Number of players:</span>&nbsp;{players[0]} - {players[1]}
          </Typography>
          <Typography gutterBottom>
            <span className={classes.bold}>Game type:</span>&nbsp;{type}
          </Typography>
          <Typography gutterBottom>
            <span className={classes.bold}>Age group:</span>&nbsp;{age}
          </Typography>
          <Typography gutterBottom>
            <span className={classes.bold}>Description:</span>
          </Typography>
          <Typography gutterBottom className={classes.text}>
            {description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteGame}>Delete game</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

export default Game
