import React from 'react'
import logo from "../../assests/logo.png";
import "./Header.css";
export default function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} className='logo_img'/>
        </div>
    </div>
  )
}
