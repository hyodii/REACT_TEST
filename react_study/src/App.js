import Page2 from "./component/Page2";
import Page1 from "./component/Page1";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Footer from "./component/Footer";

import React, { useState } from 'react'

function App() {
  /*
      해더 다크모드
   */
  const [isDarkMode, setDarkMode] = useState(false);
  const changeDark = () => {
    setDarkMode((isDarkMode) => !isDarkMode);
    console.log("isDarkMode--변했나요?--->", isDarkMode)
  }
  /*
      사이드바 목록
   */
  const [number, setNumber] = useState(0);
  const changeNumber = (number) => {
    setNumber(number)
    console.log("number--변했나요?--->", number)
  }


  return (
    <div>
      <Header darkState={isDarkMode} onClick={changeDark}></Header>
      <Sidebar numberStat={number} onClick={changeNumber}></Sidebar>
      <div>
        {number === 0 ? <Page1 /> : <Page2 />}
      </div>
      <Footer></Footer>
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