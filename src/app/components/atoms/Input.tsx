import Styled from '@emotion/styled';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { COLOR, SIZE } from '../../styles/constant';

type Contents = {
  fill?: boolean;
  type: 'text' | 'password';
  refs?: UseFormRegisterReturn;
};

type Props = InputHTMLAttributes<HTMLInputElement> & Contents;

const StyledInput = Styled('input')<Pick<Props, 'fill'>>(
  {
    fontSize: SIZE.FONT.MEDIUM,
    height: '48px',
    padding: `${SIZE.PADDING.ZERO} ${SIZE.PADDING.BASE}`,
    border: `1px solid ${COLOR.BORDER.DEFAULT}`,
    borderRadius: '4px',
    ':placeholder': {
      fontSize: SIZE.FONT.BASE,
      color: COLOR.FONT.PLACEHOLDER,
    },
  },
  ({ fill }) =>
    fill && {
      width: '100%',
    }
);

const Input: React.FC<Props> = ({
  className,
  placeholder,
  type,
  refs,
  defaultValue,
}) => (
  <StyledInput
    name={refs?.name}
    defaultValue={defaultValue}
    ref={refs?.ref}
    onBlur={refs?.onBlur}
    onChange={refs?.onChange}
    type={type}
    className={className}
    placeholder={placeholder}
  />
);

export default Input;
