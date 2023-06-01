import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  container: {
    marginBottom: '10px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '300px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  focused: {
    borderColor: '#007bff',
  },
  error: {
    borderColor: '#dc3545',
  },
  errorMessage: {
    color: '#dc3545',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    margin: 5,
  },
  helperText: {
    color: '#888',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '12px',
    margin: 5,
  },
});

export default useStyle;
