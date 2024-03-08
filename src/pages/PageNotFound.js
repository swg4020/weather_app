import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";

const Erorr = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: skyblue;
  }
  a:hover {
    color: crimson;
  }
`;

const HomeLink = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 20px;

  h1 {
    font-size: 39px;
    font-weight: 700;
  }
`;

export const PageNotFound = () => {
  return (
    <Erorr>
      <PageTitle title="404Erorr" />
      <Link to="/">
        <HomeLink>
          <h1>404ERORR</h1>
          <h3>Home으로 돌아가기</h3>
        </HomeLink>
      </Link>
    </Erorr>
  );
};
