import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Layout } from "../components/Layout";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Area = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-top: 50px;
`;

const ItemWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  color: white;
`;

const Con = styled.div`
  width: 30%;
  height: 100%;
  font-size: 15px;
  font-weight: 700;

  h3 {
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });
  // =>api에 요청시 사용하는 hook
  // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
  // =>useQuery({
  //   queryKey:["요청값"],
  //   queryFn: 요청할 함수
  // })

  // console.log("로딩중인지?" + isLoading);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <Layout>
          <Loading />
        </Layout>
      ) : (
        <Container>
          <Layout>
            <h1>{Math.round(data?.main?.temp)}°</h1>
            <Area>{data?.name}</Area>
            <ItemWrap>
              <Con>
                <h3>체감 온도</h3>
                <p>{Math.round(data?.main?.feels_like)}°</p>
              </Con>
              <Con>
                <h3>최고 온도</h3>
                <p>{Math.round(data?.main?.temp_max)}°</p>
              </Con>
              <Con>
                <h3>최저 온도</h3>
                <p>{Math.round(data?.main?.temp_min)}°</p>
              </Con>
            </ItemWrap>
          </Layout>
        </Container>
      )}
    </div>
  );
};
