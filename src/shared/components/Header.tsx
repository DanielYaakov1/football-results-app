import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

interface ITab {
  name: string;
  path: string;
}

interface IHeaderProps {
  tabs: ITab[];
}

const useStyles = makeStyles({
  root: {
    backgroundColor: ' #ccccccf2',
    padding: '10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  listItem: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
    '&.active': {
      color: 'blue',
    },
  },
});

const Header = ({ tabs }: IHeaderProps) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <header className={classes.root}>
      <nav className={classes.nav}>
        {tabs.map((tab) => (
          <li key={tab.path} className={classes.listItem}>
            <Link
              to={tab.path}
              className={`${classes.link} ${
                location.pathname === tab.path ? 'active' : ''
              }`}
            >
              {tab.name}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
