import { render } from '@testing-library/react';
import React from 'react';
import Progress from './Progress';

it('Progressが描画されていること。', () => {
  render(<Progress />);
  expect(Progress).toBeTruthy();
});
