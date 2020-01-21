import React, { useState, useRef, useEffect } from "react"

import iconArrow from "../assets/icon-arrow.svg"

const Select = ({ siteTitle }) => {

    const options = ["Consultation One", "Consultation Two", "Consultation Three"];

    const [requestListHeader, changeRequestListHeader] = useState('Select subject');
    const [requestList, setRequestList] = useState(false);
    const ref = useRef();

    const handleRequestListHeader = (e) => {
        changeRequestListHeader(e.target.value);
        setRequestList(false);
    }

    const handleRequestList = () => {
        setRequestList(!requestList);
    }
  
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setRequestList(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    });


    return (
        <div ref={ref} className={`g-select${requestList ? ` g-select__open` : ''}`}>
            <div className="g-select-header" onClick={handleRequestList}>
                <span className="g-select-header__text">
                {requestListHeader}
                </span>
                <img className="g-select-header__arrow" src={iconArrow} alt="Arrow Icon" />
            </div>
    
            {requestList ? 
            <div className="g-select-list">
                {options.map((option) =>
                <label className="g-select-list__label">
                    <input className="g-select-list__input" type="radio" name="request-subject" value={option} onChange={handleRequestListHeader} required />
                    <span className="g-select-list__text">{option}</span>
                </label>
                )} 
            </div> : null}
        </div>
    );
} 

export default Select
