import styled from '@emotion/styled';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form';
import Button from '../atoms/Buttons';
import Message from '../atoms/Message';
import AppInputContent from '../molecules/AppInputContent';
import { LoginFormValues, LoginValidation } from '../pages';

const Wrapper = styled.form({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: '24px',
});
const FormField = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '4px',
});
const Actions = styled.div({ display: 'flex' });

type Contents = {
  errorText: string;
  onSubmit: SubmitHandler<LoginFormValues>;
  onError: SubmitErrorHandler<LoginFormValues>;
};

type Props = Contents;

const AppForm: React.FC<Props> = ({ errorText, onSubmit, onError }) => {
  const { register, handleSubmit } = useFormContext<LoginFormValues>();

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit, onError)}>
      <FormField>
        {errorText && <Message type="error" text={errorText} />}
        <AppInputContent
          refs={register('id', LoginValidation.id)}
          inputType="text"
          labelText="ID"
          placeholder="ID"
        />
        <AppInputContent
          refs={register('password', LoginValidation.password)}
          inputType="password"
          labelText="Password"
          placeholder="Password"
        />
      </FormField>
      <Actions>
        <Button label="ログイン" />
      </Actions>
    </Wrapper>
  );
};

export default AppForm;
