import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica, sans-serif',
    textTransform: 'none',
    button: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 600,
      textTransform: 'none'
    },
    h2: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      color: grey[800]
    },
    h3: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 800,
      fontSize: '1.6rem',
      color: grey[800]
    },
    h4: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 800,
      fontSize: '1.2rem',
      color: grey[700]
    },
    h5: {
      fontFamily: '"Nunito Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      color: grey[700]
    },
    display1: {
      color: 'gray',
      fontSize: '0.7rem',
      lineHeight: '1.5'
    },
    display2: {
      color: 'gray',
      fontSize: '0.85rem',
      lineHeight: '1.7'
    },
    display3: {
      color: 'gray',
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: '1.3'
    }
  },
  palette: {
    primary: {500 : '#1A1A80'},
    secondary: {
      main: '#18549b'
    }
  },
  status: {
    danger: red
  }
});
