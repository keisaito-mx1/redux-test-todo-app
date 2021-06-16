import styled from '@emotion/styled';
import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Progress: React.FC = () => (
  <Wrapper>
    <CircularProgress />
    <p>...Loading</p>
  </Wrapper>
);

export default Progress;
