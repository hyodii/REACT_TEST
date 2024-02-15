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
    padding: 30px;
    text-align: center;
    ul {
        padding: 5px;
        }
    .no_dot {
            list-style-type: none;
            margin-top: 10px;
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
  const changeNumber = (number) => {
    setNumber(number)
    console.log("number--부모 변했나요?--->", number)
  }

  /*
      사이드바 depth1
   */
  const depth1 = (number => {
    switch(number) {
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
        <Sidebar $numberstate={number} onClick={changeNumber}></Sidebar>
      </Style.Sidebar>
      <Style.Page>
        {depth1(number)}
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