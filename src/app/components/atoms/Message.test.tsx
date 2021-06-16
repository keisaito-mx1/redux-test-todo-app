import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { COLOR } from '../../styles/constant';
import Message from './Message';

afterEach(cleanup);

it('Message コンポーネントが描画されていること。', () => {
  render(<Message type="notice" text="test" />);
  expect(Message).toBeTruthy();
});

it('type="notice" の場合 Message コンポーネントが描画されていること。', () => {
  render(<Message type="notice" text="test" />);
  expect(Message).toBeTruthy();
});

it('type="success" の場合 Message コンポーネントが描画されていること。', () => {
  render(<Message type="success" text="test" />);
  expect(Message).toBeTruthy();
});

it('type="error" の場合 Message コンポーネントが描画されていること。', () => {
  render(<Message type="error" text="test" />);
  expect(Message).toBeTruthy();
});

it('テキスト "メッセージ" が描画されていること。', () => {
  const { getByText } = render(<Message type="notice" text="メッセージ" />);
  expect(getByText('メッセージ')).toBeTruthy();
});

it('type="success" の場合 success用のstyleが適用されていること。', () => {
  const { getByText } = render(<Message type="success" text="success" />);
  const successMessage = getByText('success');
  expect(successMessage).toHaveStyle({
    backgroundColor: COLOR.BACKGROUND.LIGHT_GREEN,
    color: COLOR.FONT.SUCCESS,
  });
});

it('type="success" の場合 success用のstyleが適用されていること。', () => {
  const { getByText } = render(<Message type="success" text="success" />);
  const successMessage = getByText('success');
  expect(successMessage).toHaveStyle({
    backgroundColor: COLOR.BACKGROUND.LIGHT_GREEN,
    color: COLOR.FONT.SUCCESS,
  });
});

it('type="error" の場合 error用のstyleが適用されていること。', () => {
  const { getByText } = render(<Message type="error" text="error" />);
  const errorMessage = getByText('error');
  const exp = {
    backgroundColor: COLOR.BACKGROUND.LIGHT_RED,
    color: COLOR.FONT.DANGER,
  };
  expect(errorMessage).toHaveStyle(exp);
});
