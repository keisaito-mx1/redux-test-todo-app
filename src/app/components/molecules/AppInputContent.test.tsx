import { cleanup, render } from '@testing-library/react';
import React from 'react';
import AppInputContent from './AppInputContent';

afterEach(cleanup);

it('Propsが正しいこと', () => {
  const exp = {
    labelText: 'labelText',
    placeholder: 'placeholder',
    inputType: 'password',
  };

  const Component = (
    <AppInputContent
      labelText={exp.labelText}
      placeholder={exp.placeholder}
      inputType="password"
    />
  );

  expect(Component.props).toStrictEqual(exp);
});

it('AppInputContent type textのコンポーネントが描画されていること。', () => {
  const { getByPlaceholderText } = render(
    <AppInputContent
      labelText="labelText"
      placeholder="placeholder"
      inputType="text"
    />
  );
  const target = getByPlaceholderText('placeholder');
  expect(target).toBeTruthy();
  expect(target).toHaveAttribute('type', 'text');
});
it('AppInputContent type passwordのコンポーネントが描画されていること。', () => {
  const { getByPlaceholderText } = render(
    <AppInputContent
      labelText="labelText"
      placeholder="placeholder"
      inputType="password"
    />
  );
  const target = getByPlaceholderText('placeholder');
  expect(target).toBeTruthy();
  expect(target).toHaveAttribute('type', 'password');
});
