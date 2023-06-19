import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from  "../../../images/megashop.png";
const options = {
  burgerColor:"#0D49CD",
    burgerColorHover:"#FFA500",
    logo,
    logoWidth:"20vmax",
    navColor1:"white",
    logoHoverSize:"10px",
    logoHoverColor:"#1338BE",
    link1Text:"Home",
    link2Text:"Products",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",
    link1Size:"1.3vmax",
    link1Color:"#000000",
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    nav4justifyContent:"flex-start",
    link1ColorHover:"#1338BE",
    link1Margin:"1vmax",
    profileIcon:true,
    profileIconUrl:"/login",
    ProfileIconElement: FaUser,
    profileIconColor:"#000000",
    searchIcon:true,
    SearchIconElement: FaSearch ,
    searchIconColor:"#000000",
    cartIcon:true,
    CartIconElement: FaCartPlus,
    cartIconColor:"#000000",
    profileIconColorHover:"#1338BE",
    searchIconColorHover:"#1338BE",
    cartIconColorHover:"#1338BE",
    cartIconMargin:"1vmax",
}
const Header = () => {
  return (
      <ReactNavbar {...options}/>
  )
}

export default Header
