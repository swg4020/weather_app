Git hub 사용방법

git config --list 아이디와 이메일이 등록이 되어있는지 확인 하는 명령어. 최종확인은 엔터를 처야 나온다.
한/영누르고 Q를 눌러야 나와짐.

등록
1.git config --global user.name "아이디"
  git config --global user.email "메일주소"

2.git init 초기화

3.git add . 자기 컴퓨터에 저장.

4.git commit -m "base setup" 한번더 저장

5.git branch -M main 바꾸는 것.

6.git remote add origin (https://github.com/swg4020/weather_app)경로를 지정
                        <여기부분은 자기가 저장할 경로의 주소를 적어주면 된다> 

7.git push -u origin main 최종 저장




then() 처리 후에 추가내용

const instance = axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5/",
    params:{
        appid:"0af75d82b0b88142962d8c05d18e665f",
        units:"metric",
        lang:"kr",
    }
});

axios : 입력한 값을 조합하여 맞는 url로 제작해준다.


Math.round(올리고싶은 값) 반올림




기획 
라우터 설정
페이지 구성
스타일 적용
api 제작