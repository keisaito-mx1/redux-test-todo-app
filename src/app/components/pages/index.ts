import { DeepMap, FieldError, RegisterOptions } from 'react-hook-form';

type LoginFormField = 'id' | 'password';

export type LoginFormValues = Record<LoginFormField, string>;

export const isInvalid = <TField>(errors: DeepMap<TField, FieldError>) =>
  Object.values(errors).some((value) => Boolean(value));

export const LoginValidation: Record<LoginFormField, RegisterOptions> = {
  id: {
    required: true,
    maxLength: 5,
    minLength: 5,
    pattern: /^[a-z]+$/,
  },
  password: {
    required: true,
    pattern: /^[0-9a-zA-z]+$/,
  },
};

export type TodoListFormValues = {
  text: string;
};
