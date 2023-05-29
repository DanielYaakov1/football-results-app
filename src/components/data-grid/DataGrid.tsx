import { memo } from 'react';

import { makeStyles } from '@mui/styles';

interface IDataGrid {
  children: React.ReactNode;
}
const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr ',
    gridGap: 10,
    margin: '0 auto',
    padding: 20,
  },
});

const DataGrid = memo(({ children }: IDataGrid) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
});
export default DataGrid;
