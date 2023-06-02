import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: '1rem',
    textAlign: 'left',
  },
  mainContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  leftSideContainer: {
    backgroundColor: '#8f8b8bda',
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  rightSideImageContainer: {
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
