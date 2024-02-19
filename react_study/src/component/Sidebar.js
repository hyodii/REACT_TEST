import { useState } from "react";
import React from "react";
import { FaList } from "react-icons/fa6";
import { MdDesignServices, MdEmojiEvents, MdEventNote, MdLeaderboard } from "react-icons/md";
import { FaConnectdevelop, FaUser } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { FiChevronRight } from "react-icons/fi";

function Sidebar({numberstate, numberstate2, onClick, onClick2}) {
  const menus = [
    { depth1: 0, name: "서비스 목록", icon: <FaList />,
      menus: [
          {depth1:0, depth2:0, name: "서비스 목록-1", icon: <FiChevronRight />}
        , {depth1:0, depth2:1, name: "서비스 목록-2", icon: <FiChevronRight />}
        , {depth1:0, depth2:2, name: "서비스 목록-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 1, name: "서비스 정보 관리", icon: <MdDesignServices />,
      menus: [
          {depth2:0, name: "서비스 정보 관리-1", icon: <FiChevronRight />}
        , {depth2:1, name: "서비스 정보 관리-2", icon: <FiChevronRight />}
        , {depth2:2, name: "서비스 정보 관리-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 2, name: "이벤트 그룹", icon: <MdEventNote />,
      menus: [
          {depth2:0, name: "이벤트 그룹-1", icon: <FiChevronRight />}
        , {depth2:1, name: "이벤트 그룹-2", icon: <FiChevronRight />}
        , {depth2:2, name: "이벤트 그룹-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 3, name: "이벤트", icon: <MdEmojiEvents />,
      menus: [
          {depth2:0, name: "이벤트-1", icon: <FiChevronRight />}
        , {depth2:1, name: "이벤트-2", icon: <FiChevronRight />}
        , {depth2:2, name: "이벤트-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 4, name: "사용자", icon: <FaUser />,
      menus: [
          {depth2:0, name: "사용자-1", icon: <FiChevronRight />}
        , {depth2:1, name: "사용자-2", icon: <FiChevronRight />}
        , {depth2:2, name: "사용자-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 5, name: "대시보드", icon: <MdLeaderboard />,
      menus: [
          {depth2:0, name: "대시보드-1", icon: <FiChevronRight />}
        , {depth2:1, name: "대시보드-2", icon: <FiChevronRight />}
        , {depth2:2, name: "대시보드-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 6, name: "체류/경로", icon: <CiRoute />,
      menus: [
          {depth2:0, name: "체류/경로-1", icon: <FiChevronRight />}
        , {depth2:1, name: "체류/경로-2", icon: <FiChevronRight />}
        , {depth2:2, name: "체류/경로-3", icon: <FiChevronRight />}
      ]
    },
    { depth1: 7, name: "상호작용", icon: <FaConnectdevelop />,
      menus: [
          {depth2:0, name: "상호작용-1", icon: <FiChevronRight />}
        , {depth2:1, name: "상호작용-2", icon: <FiChevronRight />}
        , {depth2:2, name: "상호작용-3", icon: <FiChevronRight />}
      ]
    },
  ];

  let [number, setNumber] = useState(0);
  const handleClickButton = (number) => {
    setNumber(number);
    console.log("number--자식입니다-->", number)
  }
  let [number2, setNumber2] = useState(0);
  const handleClickButton2 = (number2, number) => {
    setNumber2(number2);
    setNumber(number);
    console.log("number2--자식입니다!-->", number2)
    console.log("number--자식입니다!-->", number2)
  }

  return (
    <div>
      <h1>대시보드</h1>
      {menus.map((menu, index) => {
        return (
          menu.menus.length > 0 ?
          <ul key={menu.depth1} className='depth11'>
            <li className='depth1'>
              {menu.icon}
              <a href="#" onClick={() => {handleClickButton(menu.depth1); onClick(menu.depth1)}} >{' ' + menu.name}</a>
                <ul className='ulDepth2'>
                  {menu.menus.map((depth2Menu) => {
                    return (
                    <li className='liDepth2' key={depth2Menu.depth2}>
                      {depth2Menu.icon}
                      <a href="#" onClick={() => {handleClickButton2(depth2Menu.depth2, depth2Menu.depth1); onClick2(depth2Menu.depth2, depth2Menu.depth1)}} >{' ' + depth2Menu.name}</a>
                    </li>
                          )
                    })
                  }
                </ul>
            </li>
          </ul>
            :
          <ul key={menu.depth1}>
            <li className='depth1'>
              {menu.icon}
              <a href="#" onClick={() => {handleClickButton(menu.depth1); onClick(menu.depth1)}} >{' ' + menu.name}</a>
            </li>
          </ul>
        )
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