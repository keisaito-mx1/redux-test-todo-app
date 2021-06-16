import { cleanup, render } from '@testing-library/react';
import React from 'react';
import AppTemplate from './AppTemplate';

afterEach(cleanup);

it('AppTemplateが描画されていること', () => {
  render(<AppTemplate />);
  expect(AppTemplate).toBeTruthy();
});
