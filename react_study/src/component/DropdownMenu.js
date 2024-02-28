import React, { useRef, useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";

const options = [
  { value: "project1", name: "project1" },
  { value: "project2", name: "project2" },
  { value: "project3", name: "project3" },
]

const DropdownMenu = () => {
  // const dropdownRef = useRef(null)
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
          <div className='dropdown'>
            {/*<dropdownbutton onClick={} ref={}>*/}
            <button className={`dropdownButton ${isActive ? "active" : "inactive"}`} onClick={onClick}>
              프로젝트를 선택해주세요
              <SlArrowDown className='slarrowdown' />
            </button>
            {/*<menu isDropped={}>*/}
              <ul className={`menu ${isActive ? "active" : "inactive"}`}>
              {options.map((option) => {
                return (
                          <li value={option.value}>{option.name}</li>
                       )
              })}
              </ul>
          </div>
  );
};

export default DropdownMenu;
