import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    width: '150px',
    padding: 8,
    margin: 5,
    border: '1px solid #ccc',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  disabled: {
    opacity: 0.9,
    cursor: 'not-allowed',
    width: '150px',
    padding: 8,
    margin: 5,
    border: '1px solid #ccc',
    borderRadius: 4,
  },
});

export default useStyles;
