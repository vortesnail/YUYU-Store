import React, { Component } from 'react';
import {
  MainWrapper,
  MainBanner,
  Section,
  Title,
  SectionUl,
} from './style';

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <MainBanner>
          <div className="text-container">
            <h1 className="title-zh">鱼鱼店，智能小程序店铺</h1>
            <p className="title-eng">yuyu.com, smart mini program stores</p>
            <a href="/" className="join-btn">快速使用</a>
          </div>
        </MainBanner>

        <Section>
          <Title>
            <h3>为什么选择我们</h3>
            <p>一站式从“商品、店铺、订单、营销、会员”管理</p>
          </Title>
          <SectionUl>
            <li className="section-1 first-icon"></li>
            <li className="section-1 second-icon">店铺管理</li>
            <li className="section-1 third-icon">订单管理</li>
            <li className="section-1 forth-icon">营销管理</li>
            <li className="section-1 fifth-icon">会员管理</li>
          </SectionUl>
          <hr />
        </Section>

        <Section>
          <Title>
            <h3>我们的优势</h3>
            <p>无需下载APP，微信扫一扫，外卖送到家</p>
          </Title>
          <SectionUl>
            <li className="section-2 first">
              <h3>01</h3>
              <h4>二维码引流</h4>
              <p>无需下载APP<br />微信扫一扫即可完成推广</p>
            </li>
            <li className="section-2 second">
              <h3>02</h3>
              <h4>小程序引流</h4>
              <p>附近的小程序，<br />用过的点一下即可使用</p>
            </li>
            <li className="section-2 third">
              <h3>03</h3>
              <h4>公众号引流</h4>
              <p>小程序绑定公众微信号，<br />关联营销，下单so easy</p>
            </li>
            <li className="section-2 forth">
              <h3>04</h3>
              <h4>分享引流</h4>
              <p>支持分享微信好友和朋友圈，<br />一键分享，轻松营销so easy</p>
            </li>
            <li className="section-2 fifth">
              <h3>05</h3>
              <h4>客服服务</h4>
              <p>可通过公众微信号和小程序，<br />一对一专业服务so easy</p>
            </li>
          </SectionUl>
        </Section>

      </MainWrapper>
    )
  }
}

export default Main;