import { SpinnerCircularFixed } from "spinners-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <SpinnerCircularFixed size={"200px"} color="rgb(49,121,252)" speed={200} />
    </Container>
  );
};
