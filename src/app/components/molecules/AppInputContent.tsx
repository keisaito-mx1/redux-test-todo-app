import styled from '@emotion/styled';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import Input from '../atoms/Input';

type Contents = {
  className?: string;
  labelText: string;
  inputType: 'text' | 'password';
  placeholder: string;
  refs?: UseFormRegisterReturn;
};
type Props = Contents;

const Wrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '4px',
});

const Label = styled.p({
  opacity: '0.6',
  fontsize: '14px',
  lineHeight: '1',
});

const AppInputContent: React.FC<Props> = ({
  labelText,
  inputType,
  refs,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Label>{labelText}</Label>
      <Input refs={refs} placeholder={placeholder} type={inputType} />
    </Wrapper>
  );
};

export default AppInputContent;
