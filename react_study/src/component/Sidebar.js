import { useState } from "react";
import React from "react";

function Sidebar({numberStat, onClick}) {
  const menus = [
    { id: 0, name: "홈페이지" },
    { id: 1, name: "소개" }
  ];

  let [number, setNumber] = useState(0);
  const handleClickButton = (number) => {
    setNumber(number);
    console.log("number--자식입니다-->", number)
  }

  return (
    <div className="sidebar">
      {menus.map((menu) => {
        return (
          <ul key={menu.id}>
            <li className='no_dot'>
              <a onClick={() => {handleClickButton(menu.id); onClick(menu.id)}} >{menu.name}</a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
export default Sidebar;