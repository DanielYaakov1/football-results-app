import useStyles from './useStyles';

interface IButton {
  // eslint-disable-next-line no-unused-vars
  onSubmit(event: { preventDefault: () => void }): void;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  label: string;
}
const Button = ({ onSubmit, disabled, type, label }: IButton) => {
  const classes = useStyles();
  return (
    <button
      className={disabled ? classes.disabled : classes.button}
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onSubmit}
    >
      {label}
    </button>
  );
};

export default Button;
