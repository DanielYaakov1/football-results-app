import useStyles from './useStyles';

interface ISorting {
  value: string;
  // eslint-disable-next-line no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  label: string;
}

export const Sorting = ({ value, handleChange, options, label }: ISorting) => {
  const classes = useStyles();
  return (
    <div className={classes.sortingContainer}>
      <label htmlFor='sorting-select' className={classes.sortingLabel}>
        {label}
      </label>
      <select
        id='sorting-select'
        value={value}
        onChange={handleChange}
        className={classes.sortingSelect}
      >
        {options.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};
