import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  NavWrapper,
  NavUl,
  LoginAndRegisterWrapper,
  Login,
  Register,
} from './style';

import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <LogoWrapper><a href="/" className="logo"><img src={logo} alt="logo" /></a></LogoWrapper>
          <NavWrapper>
            <NavUl>
              <NavLink to='/'><li className="nav-li current-li">首页<i className="underline"></i></li></NavLink>
              <NavLink to='/solution'><li className="nav-li">解决方案<i className="underline"></i></li></NavLink>
              <NavLink to='/settledin'><li className="nav-li">入驻流程<i className="underline"></i></li></NavLink>
              <NavLink to='/contact'><li className="nav-li">联系我们<i className="underline"></i></li></NavLink>
            </NavUl>
          </NavWrapper>
          <LoginAndRegisterWrapper>
            <div className="LoginAndRefister">
              <a href="/"><Login>登陆</Login></a>
              <a href="/"><Register>注册</Register></a>
            </div>
          </LoginAndRegisterWrapper>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

export default Header;