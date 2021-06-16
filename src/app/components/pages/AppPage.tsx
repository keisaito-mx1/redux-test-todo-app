import React from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useHistory } from 'react-router';
import { isInvalid, LoginFormValues } from '.';
import AppForm from '../organisms/AppForm';
import AppTemplate from '../templates/AppTemplate';

const AppPage: React.FC = () => {
  const methods = useForm<LoginFormValues>({ reValidateMode: 'onSubmit' });
  const history = useHistory();

  const errorText = isInvalid(methods.formState.errors)
    ? 'IDもしくはパスワードが違います。'
    : '';

  const onSubmit: SubmitHandler<LoginFormValues> = (e) => {
    console.log(e);
    history.push('/success');
  };

  const onError: SubmitErrorHandler<LoginFormValues> = () => {
    methods.setValue('password', '');
  };

  return (
    <FormProvider {...methods}>
      <AppTemplate>
        <AppForm errorText={errorText} onSubmit={onSubmit} onError={onError} />
      </AppTemplate>
    </FormProvider>
  );
};

export default AppPage;
