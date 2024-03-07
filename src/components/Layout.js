import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid lightgray;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 30px;
  background: rgb(99, 246, 168);
  background: linear-gradient(
    180deg,
    rgba(99, 246, 168, 0.3701855742296919) 0%,
    rgba(76, 218, 232, 1) 33%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 10px 30px;
  box-sizing: border-box;

  h1 {
    font-size: 50px;
    color: white;
    display: flex;
    justify-content: center;
  }
`;

export const Layout = ({children}) => {
  return <Container>{children}</Container>;
};
