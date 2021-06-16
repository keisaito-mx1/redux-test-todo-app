import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Buttons';

afterEach(cleanup);

it('Propsが正しいこと', () => {
  const mockFn = jest.fn();
  const Component = <Button label="保存" onClick={mockFn} />;

  const exp = {
    label: '保存',
    onClick: mockFn,
  };
  const actual = Component.props;
  expect(actual).toStrictEqual(exp);
});

it('ラベルが描画されていること', () => {
  const { getByText } = render(<Button label="保存" />);
  expect(getByText(/保存/)).toBeTruthy();
});

it('onClickが動作すること', () => {
  const mockFn = jest.fn();
  const { getByText } = render(<Button label="保存" onClick={mockFn} />);
  userEvent.click(getByText(/保存/));
  expect(mockFn).toHaveBeenCalled();
});
