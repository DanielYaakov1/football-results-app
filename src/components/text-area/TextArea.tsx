import useStyles from './useStyles';

interface ITextArea {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  placeholder: string;
  rows?: number;
  cols?: number;
}
export const TextArea = ({
  value,
  onChange,
  placeholder,
  rows,
  cols,
}: ITextArea) => {
  const classes = useStyles();
  return (
    <textarea
      className={classes.root}
      id='textArea'
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
    />
  );
};
