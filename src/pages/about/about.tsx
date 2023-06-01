import React, { memo } from 'react';
import useStyles from './useStyles';

export const About: React.FC = memo(() => {
  const classes = useStyles();

  return (
    <div className={classes.splitContainer}>
      <div className={classes.textContainer}>
        <div className={classes.container}>
          <h1 className={classes.heading}>About Us</h1>
          <p className={classes.description}>
            The Football Results App is a web application that provides live
            scores, match results, and other information about football matches
            from various leagues around the world. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quos, et! Reiciendis nisi soluta
            excepturi voluptates tenetur commodi id voluptatem eos in, quia,
            similique corrupti magni! Et ducimus fuga nisi similique?
          </p>

          <p className={classes.description}>
            The Football Results App is a web application that provides live
            scores, match results, and other information about football matches
            from various leagues around the world.
          </p>
          <p className={classes.description}>
            With our app, you can easily stay up-to-date with the latest scores
            and results of your favorite teams and leagues. Whether youre
            interested in Premier League, La Liga, Serie A, or any other league,
            weve got you covered. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facere odit magni tempora architecto similique
            maiores vitae tempore hic veritatis qui molestiae ratione neque
            commodi nam laborum, beatae reiciendis dolorum pariatur?
          </p>
          <p className={classes.description}>
            The app offers a user-friendly interface, making it easy to navigate
            and find the information you need. You can search for specific
            matches, view live scores, check detailed match statistics, and even
            receive notifications for important events during the game. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque
            deleniti, exercitationem voluptate sapiente soluta numquam! Ex,
            numquam illo. Optio sit provident ipsam reiciendis autem ullam
            ducimus minus alias numquam?
          </p>
          <p className={classes.description}>
            The Football Results App is built using React with TypeScript and
            styled with CSS. We leverage the power of MaterialUIs `makeStyles`
            utility to apply custom styles to our components, ensuring a sleek
            and responsive user interface.
          </p>
          <p className={classes.description}>
            Stay connected with the world of football and never miss a beat with
            the Football Results App. Download it now and enjoy the excitement
            of every match! Stay connected with the world of football and never
            miss a beat with the Football Results App. Download it now and enjoy
            the excitement of every match!
          </p>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={process.env.REACT_APP_URL_ABOUT_PAGE_IMAGE_URL}
          alt='tes'
        />
      </div>
    </div>
  );
});
