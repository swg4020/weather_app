import styled from "styled-components";
import { Layout } from "./Layout";

const Area = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: white;
  width: 100%;

  h1 {
    width: 100%;
  }
`;

const ItemWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Con = styled.div`
  width: 30%;
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h3 {
    width: 100%;
    text-align: center;
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 19px;
  }
`;

export const Weather = ({ weatherData }) => {
  return (
    <Layout>
      <Area>
        <h1>{Math.round(weatherData?.main?.temp)}°</h1>
        <h1>{weatherData?.name}</h1>
      </Area>
      <ItemWrap>
        <Con>
          <h3>체감 온도</h3>
          <p>{Math.round(weatherData?.main?.feels_like)}°</p>
        </Con>
        <Con>
          <h3>최고 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_max)}°</p>
        </Con>
        <Con>
          <h3>최저 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_min)}°</p>
        </Con>
      </ItemWrap>
    </Layout>
  );
};
