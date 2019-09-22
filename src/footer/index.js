import React, { Component } from 'react';

import {
  FooterWrapper,
  Relative,

} from './style';

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Relative>
          <p className="text">灰豚科技版权所有 <a href="/">浙ICP备17025649号－1</a> <a href="/">帮助中心</a> 服务时间：周一到周五 9:00～18:00 <a href="/">客服QQ：303850714</a></p>
        </Relative>
        <div className="ps-container">
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602009944" className="warning">
            <img src="http://img.yuyu.com/common/beian.png" alt="#"/>
            <p>浙公网安备 33010602009944号</p>
          </a>
        </div>
      </FooterWrapper>
    )
  }
}

export default Footer;