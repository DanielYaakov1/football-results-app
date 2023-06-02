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
  container: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  leftSideTextContainer: {
    backgroundColor: '#8f8b8bda',
    opacity: '0.8',
    height: '100%',
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
