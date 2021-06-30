#### 1. 전체 개요

#### 2. VS Code

- Extension
  - autorename
  - live server
- 단축키
  - ! + enter or tab : html5 template
  - 새로운 파일 생성시 기존 파일 선택하고 + 클릭하면 동일한 디렉토리에 새 파일 생성
  - ctrl + s: 단일 파일 저장, ctrl + alt + s: 모두 저장
  - ctrl + b: side bar 열기 닫기
  - ctrl + p: 파일 검색
  - ctrl + shift + p: 바로가기 키 검색
  - ctrl + w: 현재 탭 닫기
  - ctrl + f: 찾기, ctrl + h: 바꾸기
  - alt + up/down: 현재 줄을 위로 아래로 이동
  - alt + shift + up/down: 현재줄을 위로 아래로 복사
  - ctrl + \: split editor

<h4>3. html 기초</h4>

- html

  - div + enter or tab: <div></div>
  - img + enter or tab:
    <img src="./images/logo.png" alt="">
    <img src="http://www.blurblur.com/logo.png" alt="">

- CSS

  - div {
    	color: red;

    }

  - <head> 태그에 link + 탭
    <link rel="stylesheet" href="./main.css" />
    <link rel="icon" href="./favicon.png>

- 상대경로, 절대경로

  - ./images/  생략가능 images/
  - ../ 상위 경로

- 절대경로

  - http
  - /    : 최상위경로 , /images/

- <body>

  - a + enter or tab

    ```html
    <a href="https://naver.com">Naver</a>
    <a href="/">Home</a>
    ```

- 브라우저 스타일 초기화
  reset.css cdn 검색 jsdeliver.com 링크 사용
  reset.min.css
  <link rel="stylesheet" href="   ">
  <link rel="stylesheet" href="./main.css">

#### 4. 웹에서 시작하기

#### 5. HTML 개요

- 빈 태그: <태그/> 추천

- input
  <input type="text" />
  <input type="checkbox" />

- 글자(inline)

  - Inline 수평으로 쌓인다.

  - 글자요소는 가로 세로 사이즈를 지정할 수 없다. 줄어드려는 속성.

  - ```<span>Hello</span>
    <span style="width:100px;">Hello</span>
    <span style="height:100px;">World</span>
    ```
    
  - margin 요소의 외부여백 상하 좌우, padding 요소의 내부여백: 여백 좌우는 된다 상하는 안된다

    ```html
    <span style="margin:20px 20px">Hello</span><span style="padding:20px 20px">World</span>
    ```

  - Inline 요소에는 block 요소 사용할 수 없다. 

  - ```html
    불가: <span><div></div></span>
    가능: <span><span></span></span>
    ```

- 상자(block)

  - `<div>` 블럭요소는 세로로 쌓인다. 가로는 부모요소의 크기만큰 자동으로 늘어난다. 세로는 자동으로 줄어든다

  - ```html
    <div style="width: 100px;">Hello</div>
    <div style="height: 40px;">World</div>
    <div style="margin: 10px;">Hello</div>
    <div style="padding: 10px;">World</div>
    ```

#### 6. HTML 핵심정리

- Block

  - `<div>` 특별한 의미가 없는 구분을 위한 요소(Division)
  - `<h1>` 제목을 의미하는 요소(Heading)
  - `<p>` 문장을 의미하는 요소(Paragraph)
  - `<ul>` 순서가 필요없는 목록의 집합(Unordered List)
    - `<li>` 목록내 각 항목(List Item)
      ul>li*4

- Inline

  - `<img>` 이미지를 삽입하는 요소(image)

    ```html
    <img src="img/weather.jpg" alt="태풍" />
    ```

  - `<a>` 페이지로 이동하는 하이퍼링크를 지정하는 요소(Anchor)

    ```html
    <a href="https://www.naver.com" target="_blank" title="네이버로 이동">Naver</a>
    ```

  - `<span>` 특별한 의미가 없는 구분을 위한 요소

  - `<br>` 줄바꿈요소(break)

- Block and Inline

  - `<input>` 사용자가 데이터를 입력하는 요소

    ```html
    <input type="text" value="미리 입력된 값" placeholder="이름을 입력하세요" disabled />
    <label>
        <input type="checkbox" /> Apple
    </label>
    <lable>
    	<input type="checkbox" checked /> banana
    </lable>
    택1
    <label>
        <input type="radio" name="fruits" /> Apple
    </label>
    <lable>
    	<input type="radio" name="fruits" /> banana
    </lable>
    ```

  - `<table>` 표 요소, 행(row)와 열(td: table data)의 집합

    ```html
    <table>
        <tr>
        	<td>A</td><td>B</td>
        </tr>
        <tr>
        	<td>C</td><td>D</td>
        </tr>
    </table>
    
    ```

    

- 주석: <!--Comment--> ctrl + /

- CSS 선택자

  - <span class="red"> CSS에서 class는 .red {}

  - <span> CSS에서 태그는 span {}

  - <span id="abc"> CSS에서 #abc

  - <tag data-이름="데이터"></tag>

  - ```html
    <div data-fruit-name="apple">사과</div>
    <div data-fruit-name="banana">바나나</div>
    ```

  - ```javascript
    const els = document.querySelectorAll('div');
    els.forEach(el => {
    	console.log(el.dataset.fruitName)
       })
    ```

#### 7. CSS 개요

- CSS 선언방식

  - 내장 방식: <style></style>의 내용으로 스타일을 html <head>에 작성하는 방식

    - ```html
      <style>
          div {
              color: red;
          }
      </style>
      ```

  - 링크 방식: <link />로 외부 CSS문서를 가져와서 연결하는 방식

    - ```html
      <link rel="stylesheet" href="./css/main.css" />
      ```

  - 인라인 방식: 요소의 style 속성에 직접 스타일을 작성하는 방식(선택자 없음)

    - ```html
      <div style="color: red;"></div>
      ```

  - @import 방식: CSS의 @import 규칙으로 CSS문서 안에서 또다른 CSS 문서를 가져와 연결하는 방식

    - ```css
      @import url("./box.css");
      div {
          color: red;
      }
      ```

- 선택자

  - 기본

    - `*` 모든 요소를 선택
    - li: 태그 선택자. 태그 이름으로 요소 선택
    - .ABC: 클래스 선택자. HTML class 속성의 값이 ABC인 요소 선택
    - #ABC: 아이디 선택자. HTML id 속성의 값이  ABC인 요소 선택

  - 복합

    - 일치 선택자(Basic combinator): 선택자 ABC와 XYZ를 동시에 만족하는 요소 선택.

      - 태그 선택자를 맨 앞에. 

      ```css
      span.orange {	
      	color: red;
      }
      ```

    - 자식 선택자(Child combinator): 선택자 ABC의 자식 요소 XYZ 선택.

      ```css
      ul > .orange {
      	color: red;
      }
      ```

    - 하위 선택자(Descendant combinator): 선택자 ABC의 하위 요소 XYZ 선택. 띄어쓰기가 선택자의 기호

      ```
      div .orange {
      	color: red;
      }
      ```

    - 인접형제 선택자(Adjacent sibling combinator): 선택자 ABC의 다음 형제 요소 XYZ 하나를 선택.

      ```css
      .orange + li {
      	color: red;
      }
      ```

    - 일반형제 선택자(General sibling combinator): 선택자 ABC의 다음 형제 요소 XYZ 모두를 선택.

      ```css
      .orange ~ li {
      	color: red;
      }
      ```

  - 가상 클래스 선택자

    - :hover : 선택자 ABC 요소에 마우스 커서가 올라가 있는 동안 선택.

      ```
      .box {
      	width: 100px;
      	height: 100px;
      	background-color: orange;
      	transition: 1s;
      }
      .box:hover {
      	width: 300px;
      	background-color: royalblue;
      }
      ```

    - :active : 선택자 ABC 요소에 마우스를 클릭하고 있는 동안 선택.

    - :focus : 선택자 ABC 요소가 포커스되면 선택.

      ```html
      <div class="box" tabindex="-1"></div>
      ```

      ```css
      input:focus {
      	background-color: orange;
      }
      ```

    - ABC:first-child : 선택자 ABC가 형제 요소 중 첫째라면 선택.

      ```css
      .fruits span:first-child {
      	color: red;
      }
      ```

    - ABC:last-child : 선택자 ABC가 형제 요소 중 막내라면 선택.

    - ABC:nth-child(n) : 선택자 ABC가 형제 요소 중 (n)째라면 선택.

      ```
      .fruits *:nth-child(2n) {
      	color: red;
      }
      ```

    - ABC:not(XYZ) : 선택자 XYZ가 아닌 ABC 요소 선택.

      ```css
      .fruits *:not(span) {
      	color: red;
      }
      ```

  - 가상 요소 선택자

    - ABC::before 또는 ABC::after 선택자 ABC 요소의 내부 앞에 또는 뒤에 내용(Content)을 삽입.

      ```css
      .box::before {
      	content: 앞!;
      }
      
      .box::after {
      	content: "";
          display: block; //inline 요소를 block 요소로 변환
          width: 30px;
          height: 30px;
          background-color: royalblue;
      }
      ```

  - [ABC] : 속성 선택자(Attribute). 속성 ABC를 포함한 요소 선택

    ```
    [disabled] {
    	color: red;
    }
    
    [type] {
    	color:red;
    }
    
    [type="text"] {
    	color:red;
    }
    
    <input type="text" value="ABCD" disabled>
    ```

  - <input type="password" />

- 스타일 상속

  - 모두 글자/문자 관련 속성들!(모든 글자/문자 속성은 아님 주의)

    - font-style
    - font-weight
    - font-size
    - line-height
    - font-family
    - color
    - text align

    ```
    .animal {
    	color: red;
    }
    
    <div class="animal">동물
    	<div class="tiger">호랑이</div>
    ```

  - 강제상속

    ```
    .parent {
    	width: 300px;
    	height: 200px;
    	background-color: red;
    }
    
    .child {
    	width: 300px;
    	height: inherit;
    	background-color: orange;
    }
    ```

  - 선택자 우선순위: 같은 요소가 여러 선언의 대상이 된 경우 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법

    - 점수가 높은 선언이 우선함
    - 점수가 같으면 가장 마지막에 해석된 선언이 우선함 

    ```
    div { color: red !important; }
    <div style="color: orange"> //inline 1000점  
    #color_yellow { color: red; } //ID 선택자 100점
    .color_green { color: red; } //Class 선택자 10점
    div { color: red; } //Tag 선택자 1점
    ```

    ```
    .list li.item //21
    .list li:hover //21 가상클래스도 클래스
    .box::before //11 요소=태그
    #submit span //101
    header .menu li:nth-child(2) //22
    h1 //1
    :not(.box) //10
    ```

    

#### 8. CSS 속성

- width, height

  - 브라우저가 너비를 계산
  - `<span>` inline 요소, 가로/세로를 최소로, 가로/세로 지정 불가
  - `<div>` block 요소, 가로를 최대로, 세로를 최소로
  - max-width, max-height

- 단위

  - px 픽셀 
  - % 상대적 백분율
  - em 요소의 글꼴 크기 // 기본 font 사이즈 16px
  - rem 루트 요소(html)의 글꼴 크기
  - vm 뷰포트 가로 너비의 백분율 //50vm
  - vh 뷰포트 세로 너비의 백분율 //100vh

- margin

  - margin-bottom: 20px;
  - margin: 10px 20px; top bottom / left right
  - margin: 10px 20px 30px; top left,right bottom
  - margin: 10px 20px 30px 40px; top right bottom left

- padding

  ```
  <div class="container">
  	<div class="item"></div>
  	<div class="item"></div>
  </div>
  
  .container .item {
  	width: 100px;
  	height: 100px;
  	background-color: orange;
  	border: 4px solid red;
  }
  
  .container .item:first-child {
  	padding: 20px;
  }
  ```

- border: width style color
  border: medium none/dashed  black/transparent;
  border-bottom-color: red
  border-bottom-width: medium
  border-bottom-style: solid

- border-radius

  ```
  div {
  	width: 100px;
  	height: 100px;
  	background-color: orange;
      margin: 20px;
  	border-radius: 0 10px 0 0;
  }
  ```

- box-sizing

  ```
  <div class="item"></div>
  <div class="item"></div>
  
  .item {
  	width: 100px;
  	height: 100px;
  	background-color: orange;
  }
  .item:first-child {
  	border: 4px solid red;
  	padding: 20px;
  	box-sizing: border-box;//기본은 content-box
  }
  ```

- overflow: 요소의 크기 이상으로 내용이 넘쳤을때 보여짐을 제어하는 단축 속성

  - overflow-x
    overflow-y
  - visible: 
    hidden:
    scroll: 넘친 내용을 잘라냄, 스크롤바 생성
    auto: 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성

  ```
  <div class="parent"></div>
  	<div class="child"></div>
  </div>
  
  .parent {
  	width: 200px;
  	height: 200px;
  	background-color: royalblue;
  	margin: 20px;
  	padding: 20px;
  	overflow: scroll;
  }
  .child {
  	width: 300px;
  	height: 100px;
  }
  ```

- display

  ```
  body {
  	margin: 20px;
  }
  span {
  	display: block;
  	width: 100px;
  	height: 100px;
  	background-color: royalblue;
  	color; white;
  }
  ```

- opacity: 0-1 사이

  - opacity: .5; // 0을 생략할 수 있다. 기본은 1.

- 글꼴: 기본은 16px

  ```
  h1 {
  	font-size: 24px;
  	font-weight: 700; //normal은 400, 100-900사이 100단위로.bold라고 할 수도.
  	font-style: italic;
  	font-family: "Malgun Gothic", serif;//첫번째부터 적용.""는 띄어쓰기 있는 font용
  }
  p {
  	width: 350px;
  	padding: 10px;
  	border: 1px solid;
  	box-sizing: border-box;
  	line-height: 1.4;// 단위 없으면 글꼴 크기의 배수, 32px = 2 = 200%, 
  }
  ```

- 문자

  ```
  <a href="https://www.google.com">
  	google
  </a>
  
  a {
  	display: block;
  	width: 200px;
  	height: 100px;
  	background-color: orange;
  	font-size: 22px;
  	color: white; //rgb(0,0,0)
  	text-decoration: none; //underline, line-through
  	text-align: center;
  	line-height: 100px;
  }
  
  p {
  	text-indent: 40px; 
  }
  ```

- 배경

  ```css
  <div></div>
  
  div {
  	width: 200px;
  	height: 200px;
  	background-color: orange; //transparent
  	background-image: url("www.dkjlf.com/image.gif");
  	background-size: 150px ; // cover(화면 가득채움), contain(가득채움)
  	background-repeat: no-repeat; //repeat-x, repeat-y
  	background-position: top right; //0%-100%,100px(x 좌에서부터) 30px(y 위에서부터)
      background-attachment: scroll // fixed 스크롤 없음
  	
  }
  ```

- 배치

  - position: 

    - static: 기본값. 포지션이 없는 것과 동일

    - relative : 요소 자신을 기준

      ```
      position: relative;
      top: 30px;
      left: 30px;
      ```

      

    - absolute: 위치상 부모 요소를 기준, 주변과의 상호작용이 없어진다  

    - fixed: 뷰포트(브라우저)를 기준

    - position 속성의 값으로 absolute, fixed가 지정된 요소는 display 속성이 block으로 변경됨.

  ```
  <div class="container">
  	<div class="item">1</div>
  	<div class="item">2</div>
  	<div class="item">3</div>
  </div>
  
  .container {
  	width: 300px;
  	background-color: royalblue;
  }
  .container .item {
  	border: 4px dashed red;
  	background-color: orange;
  	position: relative;//요소위치 지정기준 
  }
  .container .item:nth-child(1) {
  	width: 100px;
  	height: 100px;
  }
  .container .item:nth-child(2) {
  	width: 140px;
  	height: 70px;
  	position: absolute;
  	right: 10px;
  	bottom: 10px;
  }
  .container .item:nth-child(3) {
  	width: 70px;
  	height: 120px;
  }
  ```

  

  - 요소 쌓임 순서(Stack order): 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정
    - 요소에 position 속성의 값이 있는 경우 위에 쌓임.(기본값 static 제외)
    - 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임
      - z-index: 크면 우선
    - 1번과 2번 조건까지 같을 경우, html의 다음 구조일수록 위에 쌓임

- 플렉스

  - display: flex container의 화면 출력 특성 
    - flex: 블록 요소와 같이 flex container 정의
      - 블록 요소는 기본적으로 가로로 늘어나려는 속성
      - 블록 요소는 위에서 아래로 쌓인다
    - inline-flex: 인라인 요소와 같이 flex container 정의
      - 인라인 요소는 좌에서 우로 쌓인다
  - flex-direction: 
    - row: 좌-우
    - row-reverse: 우-좌
    - column: 상-하
    - column-reverse: 하-상
  - flex-wrap: wrap; no-wrap 줄바꿈 없음, wrap 줄바꿈

  ```
  .container {
  	width: 400px
  	background-color: royalblue;
  	display: flex;
  	flex-wrap: wrap;
  }
  ```

  

  - justify-content: 주축의 정렬 방법
    - flex-start: flex items를 시작점으로 모아
    - flex-end: flex items를 끝점으로 모아
    - center: flex items를 가운데 모아
  - align-content: 교차 축의 여러 줄 정렬 방법, 두 줄 이상이어야.
    - stretch: 기본값
    - flex-start: flex items를 시작점으로 모아
    - flex-end: flex items를 끝점으로 모아
    - center: flex items를 가운데 모아
  - align-items: 교차 축의 한 줄 내에서 정렬 방법
    - stretch: 기본값
    - flex-start: flex items를 시작점으로 모아
    - flex-end: flex items를 끝점으로 모아
    - center: flex items를 가운데 모아

- flex items

  - order: 0 기본값 순서 없음. 숫자: 작을수록 먼저
  - flex-grow: 빈공간을 채우기 위해 flex items 증가 비율. 0 증가 비율 없음. 숫자: 증가비율
  - flex-shrink: flex item의 감소 너비 비율. 1: 기본값  flex container 너비에 따라 감소 비율 적용. 숫자: 감소 비율, 0 감소 비율 없음.
  - flex-basis: flex item의 공간 배분 전 기본 너비. auto: 기본값 요소의 content 너비. 또는 px 등 단위로 지정.

- 전환: google에서 easing functions 검색 

  - transition: 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
    - transition: 속성명 지속시간 타이밍함수 대기시간;
      - transition-property: 전환 효과 사용할 속성 이름을 지정
        - all: 모든 속성에
        - 속성이름: 전환효과 사용할 속성
      - transition-duration: 요소별 다른 지속시간 지정 가능
      - transition-timing-function: 전환효과의 타이밍 함수를 지정
        - ease: 기본값. 느리게 빠르게 느리게
        - linear: 일정하게
        - ease-in: 느리게 빠르게
        - ease-out: 빠르게 느리게
        - ease-in-out: 느리게 빠르게 느리게
      - transition-delay: 전환효과가 몇 초 뒤에 시작할지.

  ```
  div {
  	width: 100px;
  	height: 100px;
  	background-color: orange;
  	transition: 1s .5s;
  	//transition: width 1s, background-color 2s;
  }
  div:active {  // active: 클릭했을때, hover: 마우스 커서를 올렸을때
  	width: 300px;
  	background-color: royalblue;
  }
  ```

  

- 변환: transform:

  - translate(x, y)
  - translateX(x)
  - translateY(y)
  - scale(x,y)
  - scaleX(2 )
  - rotate(45deg)
  - skewX(45deg)
  - skewY(45deg)
  - rotateX(45deg)
  - rotateY(45deg)
  - perspective(n): transform 함수는 제일 앞에 작성해야 한다. 관찰 대상에 적용

- perspective: 속성. 관찰 대상의 부모에 적용

  - perspective: 600px

- backface-visibility: 3D 변환으로 회전된 요소의 뒷면 숨김 여부

  - visible or hidden



nvm install 14.16.0
nvm use 12.14.1
node --version
nvm uninstall 14.16.0

//npm은 node.js와 함께 설치됨.
//새로운 폴더를 만들고 아래 터미널에서 
npm init -y //package.json 자동설치됨
npm install parcel-bundler -D
npm install lodash







