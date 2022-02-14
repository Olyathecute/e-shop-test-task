import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#011627',
    color: 'white'
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      textDecoration: 'underline '
    }
  },
  italicLink: {
    fontFamily: 'Great Vibes',
    fontSize: '1.8rem',
    textDecoration: 'none',
    '&:visited': {
      color: 'white'
    },
    '&:hover': {
      textDecoration: 'none '
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, .5)',
    '&:hover': {
      color: 'white'
    }
  }
})
