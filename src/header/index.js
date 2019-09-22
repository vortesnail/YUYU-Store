import React, { Component } from 'react';

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
          <LogoWrapper><a href="/" className="logo"><img src={logo} alt="logo"/></a></LogoWrapper>
          <NavWrapper>
            <NavUl>
              <li className="nav-li current-li">首页<i className="underline"></i></li>
              <li className="nav-li">解决方案<i className="underline"></i></li>
              <li className="nav-li">入驻流程<i className="underline"></i></li>
              <li className="nav-li">联系我们<i className="underline"></i></li>
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