import React, { useRef, useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { useDetectProjectOutsideClick } from "./useDetectProjectOutsideClick";

const options = [
  { value: "project1", name: "project1" },
  { value: "project2", name: "project2" },
  { value: "project3", name: "project3" },
]

const DropdownMenu = () => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectProjectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
          <div className='dropdown'>
            <button className={`dropdownButton ${isActive ? "active" : "inactive"}`} onClick={onClick} ref={dropdownRef}>
              프로젝트를 선택해주세요
              <SlArrowDown className='slarrowdown' />
            </button>
              <ul className={`menu ${isActive ? "active" : "inactive"}`}>
              {options.map((option) => {
                return (
                          <li key={option.value}>{option.name}</li>
                       )
              })}
              </ul>
          </div>
  );
};

export default DropdownMenu;
