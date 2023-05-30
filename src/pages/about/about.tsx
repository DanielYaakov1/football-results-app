import React from 'react';
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
    marginBottom: 5,
    textAlign: 'center',
  },
  splitContainer: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  textContainer: {
    backgroundColor: '#8f8b8bda',
    opacity: '0.8',
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

export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.splitContainer}>
        <div className={classes.textContainer}>
          <div className={classes.container}>
            <h1 className={classes.heading}>About Us</h1>
            <p className={classes.description}>
              The Football Results App is a web application that provides live
              scores, match results, and other information about football
              matches from various leagues around the world.
            </p>

            <p className={classes.description}>
              The Football Results App is a web application that provides live
              scores, match results, and other information about football
              matches from various leagues around the world.
            </p>
            <p className={classes.description}>
              With our app, you can easily stay up-to-date with the latest
              scores and results of your favorite teams and leagues. Whether
              youre interested in Premier League, La Liga, Serie A, or any other
              league, weve got you covered.
            </p>
            <p className={classes.description}>
              The app offers a user-friendly interface, making it easy to
              navigate and find the information you need. You can search for
              specific matches, view live scores, check detailed match
              statistics, and even receive notifications for important events
              during the game. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Possimus cumque deleniti, exercitationem
              voluptate sapiente soluta numquam! Ex, numquam illo. Optio sit
              provident ipsam reiciendis autem ullam ducimus minus alias
              numquam?
            </p>
            <p className={classes.description}>
              The Football Results App is built using React with TypeScript and
              styled with CSS. We leverage the power of MaterialUIs `makeStyles`
              utility to apply custom styles to our components, ensuring a sleek
              and responsive user interface.
            </p>
            <p className={classes.description}>
              Stay connected with the world of football and never miss a beat
              with the Football Results App. Download it now and enjoy the
              excitement of every match! Stay connected with the world of
              football and never miss a beat with the Football Results App.
              Download it now and enjoy the excitement of every match!
            </p>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src='https://cdn.pixabay.com/photo/2017/11/05/19/41/stadium-2921657_1280.jpg'
            alt='tes'
          />
        </div>
      </div>
    </div>
  );
};
