import styled from "@emotion/styled";

const Wrapper = styled.div({
  margin: "0 auto",
  width: "100%",
  maxWidth: "400px",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const AppTemplate: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppTemplate;
