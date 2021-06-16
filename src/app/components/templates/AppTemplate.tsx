import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const AppTemplate: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppTemplate;
