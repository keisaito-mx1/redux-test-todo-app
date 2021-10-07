import styled from "@emotion/styled";
import HeaderForm from "../organisms/HeaderForm";

const Wrapper = styled.div({
  margin: "0 auto",
  maxWidth: "640px",
  height: "100vh",
});

const TodoTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <HeaderForm placeholder="Input Your Task" />
      {children}
    </Wrapper>
  );
};

export default TodoTemplate;
