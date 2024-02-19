import React, { useState } from 'react'

import Header from "./component/Header";
import Footer from "./component/Footer";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4";
import Page5 from "./component/Page5";
import Page6 from "./component/Page6";
import Page7 from "./component/Page7";
import Page8 from "./component/Page8";
import Sidebar from "./component/Sidebar";
import styled from "styled-components";
import Page1_2 from "./component/Page1_2";
import Page1_3 from "./component/Page1_3";

const Style = {
  Header: styled.div`
    place-items: end;
    display: grid;
    padding: 1rem 1.5rem;
  `,
  Sidebar: styled.div`
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    top: 0px;
    width: 8rem;
    height: 93%;
    // height: 100vh; 이거되도록 부모 엘리먼트 설정해야함
    padding: 30px;
    text-align: left;
    ul {
        padding: 5px;
        text-decoration-line: none;
        }
    .depth1 {
        list-style-type: none;
        margin-top: 10px;
        color: #818181;
        }
    .depth1 a {
      text-decoration: none;
      color: #818181;
    }
    .depth1:hover {
      color: white;
    }
    .depth1 a:hover {
      color: white;
      .depth2 a {
      }
    }
    .depth22 {
      display: none;
    }
    .depth11 > li:hover > ul {
      display: block;
      position: absolute;
      background-color: #888;
      border-radius: 10px;
      place-items: center;
      top: 0px;         /* 2차 메뉴의 상단을 1차 메뉴의 상단에 고정 */
      left: 100%;     /* 2차 메뉴를 1차 메뉴의 너비만큼 이동 */
      width: 100%;    /* 1차 메뉴의 너비를 상속 */
    }
    .depth11 > li {
      position: relative;
    }
    .depth2 {
        list-style-type: none;
        margin-top: 10px;
        color: black;
        }
    .depth11 > li:hover > ul a {
      text-decoration: none;
      color: black;
    }
    .depth2:hover {
      color: white;
    }
    border-radius: 10px
  `,
  Page: styled.div`
    position: absolute;
    left: 230px;
    top: 88px;
  `,
  Footer: styled.div`
    place-items: center;
    display: grid;
    padding: 1rem 1.5rem;
    position: absolute;
    bottom: 0;
    width: 97%;
    font-style: italic;
  `
}

function App() {
  /*
      해더 다크모드 상태
   */
  const [isDarkMode, setDarkMode] = useState(false);
  const changeDark = () => {
    setDarkMode((isDarkMode) => !isDarkMode);
    console.log("isDarkMode--부모 변했나요?--->", isDarkMode)
  }

  /*
      사이드바 상태
   */
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const changeNumber = (number) => {
    setNumber(number)
    console.log("number--부모 변했나요?--->", number)
  }
  const changeNumber2 = (number2, number) => {
    setNumber2(number2)
    setNumber(number)
    console.log("number2--부모 변했나요?--->", number2)
    console.log("number--부모 변했나요?--->", number)
  }

  /*
      사이드바 depth1
   */
  const depth1 = ((number, number2) => {
    switch(number) {
    case 0: switch(number2) {
      case 0: return <Page1/>
      case 1: return <Page1_2/>
      case 2: return <Page1_3/>
    }
    break;
    case 1: return <Page2/>
    case 2: return <Page3/>
    case 3: return <Page4/>
    case 4: return <Page5/>
    case 5: return <Page6/>
    case 6: return <Page7/>
    case 7: return <Page8/>
    }
  })

  /*
      사이드바 depth2
   */
  const depth2 = ( (number2) => {
    switch(number2) {
      case 0: return <Page1/>
      case 1: return <Page2/>
      case 2: return <Page3/>
      case 3: return <Page4/>
      case 4: return <Page5/>
      case 5: return <Page6/>
      case 6: return <Page7/>
      case 7: return <Page8/>
    }
  })

  return (
    <div>
      <Style.Header>
        <Header $darkstate={isDarkMode} onClick={changeDark}></Header>
      </Style.Header>
      <Style.Sidebar>
        <Sidebar $numberstate={number} $numberstate2={number2} onClick={changeNumber} onClick2={changeNumber2}></Sidebar>
      </Style.Sidebar>
      <Style.Page>
        {depth1(number, number2)}
      </Style.Page>
      <Style.Footer>
        <Footer></Footer>
      </Style.Footer>
    </div>
  );
}

export default App;

/*
[미션 1]
1. Header 컴포넌트에 고대비 설정 버튼이 있다.(다크모드)
2. 고대비 상태값은 App 컴포넌트에서 관리해야된다. (전체 컴포넌트의 스타일 변경을 전파해주기 위함)
3. Header 컴포넌트에서 고대비 설정 버튼을 클릭 시 App 컴포넌트의 상태값을 변경해야 된다.
4. App 컴포넌트에서 변경된 상태값은 모든 하위 컴포넌트에 전파해줘야 된다.
[미션 2]
- Sidebar 연결하기
[미션 3]
- css, scss 말고 styled-component를 활용하여!!사이드바 메뉴 스타일을 한번 꾸며보시지요.
*/