import { useState } from "react";
import React from "react";

function Sidebar({numberstate, onClick}) {
  const menus = [
    { depth1: 0, depth2: 0, name: "서비스 목록" },
    { depth1: 1, depth2: 0, name: "서비스 정보 관리" },
    { depth1: 2, depth2: 0, name: "이벤트 그룹" },
    { depth1: 3, depth2: 0, name: "이벤트" },
    { depth1: 4, depth2: 0, name: "사용자" },
    { depth1: 5, depth2: 0, name: "대시보드" },
    { depth1: 6, depth2: 0, name: "체류/경로" },
    { depth1: 7, depth2: 0, name: "상호작용" }
  ];

  let [number, setNumber] = useState(0);
  const handleClickButton = (number) => {
    setNumber(number);
    console.log("number--자식입니다-->", number)
  }

  return (
    <div>
      {menus.map((menu) => {
        return (
          <ul key={menu.depth1}>
            <li className='no_dot'>
              <a onClick={() => {handleClickButton(menu.depth1); onClick(menu.depth1)}} >{menu.name}</a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Sidebar;
/*
[사이드바 목록]
서비스 목록
서비스 정보 관리
이벤트 그룹
이벤트
사용자
대시보드
체류/경로
상호작용
*/