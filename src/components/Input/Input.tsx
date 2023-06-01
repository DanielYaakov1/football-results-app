/* eslint-disable no-unused-vars */
import { ChangeEvent, FocusEvent, useCallback, useState } from 'react';
import useStyle from './useStyles';

interface IInput {
  type: string;
  placeHolder: string;
  value: string;
  id?: string;
  label?: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  placeHolder,
  value,
  onChange,
  id,
  onFocus,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = () => {},
  error,
  helperText,
  label,
}: IInput) => {
  const classes = useStyle();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur]
  );

  return (
    <div className={classes.container}>
      <label htmlFor='label' className={classes.label}>
        {label}
      </label>
      <input
        className={`${classes.input} ${
          error && !isFocused ? classes.error : ''
        } ${isFocused ? classes.focused : ''}`}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {error && !isFocused && (
        <span className={classes.errorMessage}>{error}</span>
      )}
      {helperText && <span className={classes.helperText}>{helperText}</span>}
    </div>
  );
};

export default Input;
