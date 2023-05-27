import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sortingContainer: {
    display: 'inline-block',
  },

  sortingLabel: {
    display: 'block',
    marginBottom: 4,
    fontWeight: 'bold',
  },

  sortingSelect: {
    width: 150,
    height: 30,
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    cursor: 'inherit',
    lineHeight: 'inherit',
    padding: '0 12',
    appearance: 'none',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    '&:focus': {
      outline: 'none',
      borderColor: '#555',
    },
  },
});

export default useStyles;
