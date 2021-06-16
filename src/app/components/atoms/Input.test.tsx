import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';

afterEach(cleanup);
it('Input  コンポーネントが描画されていること。', () => {
  render(<Input type="text" />);
  expect(Input).toBeTruthy();
});
