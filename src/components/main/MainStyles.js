import { TextField, Slider, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#F77F00'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F77F00'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F77F00'
    },
    '&:hover fieldset': {
      borderColor: '#D62828'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F77F00'
    }
  }
})

export const PrettoSlider = styled(Slider)({
  color: '#D62828',
  height: 5,
  '& .MuiSlider-track': {
    border: 'none'
  },
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit'
    }
  }
})

export const ColorButton = styled(Button)({
  color: '#EAE2B7',
  backgroundColor: '#003049',
  '&:hover': {
    backgroundColor: '#003049'
  },
  width: '100%'
})

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 225,
      width: 250,
      color: '#F77F00'
    }
  }
}

export const useStyles = makeStyles({
  formInput: {
    '& label.Mui-focused': {
      color: '#F77F00'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#F77F00'
      },
      '&:hover fieldset': {
        borderColor: '#D62828'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F77F00'
      }
    }
  }
})

export function getStyles(index, name, theme) {
  return {
    fontWeight: name.indexOf(index) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
  }
}
