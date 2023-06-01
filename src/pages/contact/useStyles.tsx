import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: '1rem',
    textAlign: 'left',
  },
  splitContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  textContainer: {
    backgroundColor: '#8f8b8bda',
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default useStyles;
