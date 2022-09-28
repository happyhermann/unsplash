

# 📕 무료 사진 검색 사이트 클로닝 
 
* 프로젝트 형태: 개인 프로젝트 / unsplash 사진 갤러리 클로닝 (Unsplash : https://unsplash.com/)
* 프로젝트 기간: 22.09.26 ~ 22.09.28 
* 프로젝트 API 제공 출처: Unsplash Developers
 


## 👆 프로젝트 메인 페이지

### ⚙️*개발언어*
<hr/>
<figure class="third">

 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
 
 </figure>

### 📚*라이브러리*
<hr/>
<img src="https://img.shields.io/badge/-axios-lightgrey" />
<img src="https://img.shields.io/badge/-recoil-lightgrey" />
<img src="https://img.shields.io/badge/-%20remixicon-lightgrey" />
<img src="https://img.shields.io/badge/-react--router--dom-lightgrey" />



#### 💻배포 주소
> netlify : https://unsplashcloning.netlify.app/
- 주의 : 시간당 50회만 get 요청 가능합니다, 일정 시간 지난 후 다시 접속하여주세요!



### 🕹프로젝트 과정
---------------------------------------
 



#### 전역적 코드 관리 

> 상태값 : 기본 react-hook (useState, useLocation, useMatch) 사용, * 서치 사진 리스트 객체 핸들링하는 1번만 recoil atom 사용

> CSS 스타일링 : Styled-components로 각 라우터 페이지나 컴포넌트에서 고유의 스타일링 container, tag 생성 

+ #### 반응형 마크업은 flex-grid와 미디어 쿼리로 '사진 리스트'에만 적용함 


<hr/>

#### 홈화면 / 랜덤 사진 갤러리 리스트 

 
  > 사용 API : https://api.unsplash.com/photos/random

  > Home 페이지에 접근시 (mount될 때 : useEffect 사용) 랜덤 사진 데이터를 불러오는 Unsplash Random Photo API Get으로 통신하여 useState로 데이터 set
  > 사진 리스트는 별도의 오픈 소스 없이 display : grid를 사용하여 랜덤 
  > 탭으로 사진 이동 가능하게 ul => li 시멘틱 마크업 준수
  
  
#### 무한 스크롤 

  > new IntersectionObserver 사용해서 구현 
 
   
 
 
#### 사진 검색 기능 

 
  > 사용 API : [https://api.unsplash.com/photos/random

  > axios 
 
 
