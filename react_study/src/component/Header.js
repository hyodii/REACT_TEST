import React, { useState } from 'react';
import ToggleSwitch from "./ToggleSwitch";

function Header({darkstate, onClick}) {

  darkstate ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light")
  const [isDarkMode, setDarkMode] = useState(darkstate);
  const handleClickButton = () => {
    setDarkMode((isDarkMode) => !isDarkMode);
    if(isDarkMode) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className='header'>
      {/*<ToggleSwitch label="토글토글"/>*/}
      <button onClick={() => {handleClickButton(isDarkMode); onClick()}}>
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