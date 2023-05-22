import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  gameCardContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  gameCardHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  card: {
    padding: '20px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    backgroundColor: '#9babbb78',
    opacity: '0.8',
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
    '& .team-crest': {
      width: '30px',
      height: '30px',
    },
  },
  cardText: {
    margin: '5px 0',
  },
  cardTextBold: {
    fontWeight: 'bold',
  },
});

export default useStyles;
