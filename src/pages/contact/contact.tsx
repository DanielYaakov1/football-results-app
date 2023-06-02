import { memo, useCallback, useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/button';
import { TextArea } from '../../components/text-area/TextArea';
import useStyles from './useStyles';
import RESOURCES from '../../shared/constants/resources';

export const Contact = memo(() => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [disabledButton, setDisabledButton] = useState<boolean>(true);
  const classes = useStyles();

  useEffect(() => {
    if (name.length && email.length) {
      setDisabledButton(false);
    }
  }, [email, name]);

  const onSubmit = useCallback(
    (event: { preventDefault: () => void }) => {
      event.preventDefault();
      if (!name || !email) {
        setError(RESOURCES.CONTACT_US_FORM_EMPTY_FIELDS_MESSAGE);
        return;
      }
      // Perform submission logic here

      // Reset the form
      setName('');
      setEmail('');
      setError('');
      setMessage('');
    },
    [email, name]
  );

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSideContainer}>
        <h1>Contact us</h1>
        <Input
          label='Name'
          type='text'
          placeHolder={RESOURCES.CONTACT_US_PLACEHOLDER_INPUT_NAME}
          value={name}
          error={error}
          helperText={error}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label='Email'
          type='email'
          placeHolder={RESOURCES.CONTACT_US_PLACEHOLDER_INPUT_EMAIL}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          helperText={error}
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={RESOURCES.CONTACT_US_PLACEHOLDER_INPUT_MESSAGE}
          rows={10}
        />
        <div>
          <Button
            label='Send'
            type='submit'
            onSubmit={onSubmit}
            disabled={disabledButton}
          />
        </div>
      </div>
      <div className={classes.rightSideImageContainer}>
        <img
          className={classes.image}
          src={process.env.REACT_APP_CONTACT_US_PAGE_IMAGE_URL}
          alt='contact-us'
        />
      </div>
    </div>
  );
});
