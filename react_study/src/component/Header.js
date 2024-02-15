import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

function Header({darkstate, onClick}) {

  const [isDarkMode, setDarkMode] = useState(false);

  const handleClickButton = (isDarkMode) => {
    setDarkMode(!isDarkMode);
    console.log("isDarkMode--자식입니다-->", isDarkMode)
  }

  return (
    <div className='header'>
      <h1>대시보드</h1>
      <ToggleSwitch label="토글토글"/>
      <button
        style={{
          border: "1px solid black",
          padding: "10px 15px",
          borderRadius: "25px",
          backgroundColor: isDarkMode ? "black" : "white",
          color : isDarkMode ? "white" : "black"
        }}
        onClick={() => {handleClickButton(isDarkMode); onClick()}}
      >
        {isDarkMode ? "다크모드 비활성화" : "다크모드 활성화"}
      </button>
    </div>
  );
}

export default Header;

/*
state를 상위 컴포넌트(App.js)로 올려야함
lift up (성공!)
*/