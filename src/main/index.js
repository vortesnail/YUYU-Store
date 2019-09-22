import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  MainWrapper,
  MainBanner,
  Section,
  Title,
  SectionUl,
  JoinImg,
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

        <JoinImg>
          <Title>
            <h3 style={{ color: "#fff" }}>入驻流程</h3>
            <p style={{ color: "#fff" }}>仅需4步，快速拥有属于商家的专属店铺</p>
          </Title>
          <div className="img-container">
            <img className="banner-02" src="http://www.yuyu.com/assets/www/img/banner-02.png" alt="" />
            <p className="step1">注册鱼鱼店<br />上传商户信息</p>
            <p className="step2">申请微信公众号<br/>和小程序</p>
            <p className="step3">开通微信支付<br />授权小程序</p>
            <p className="step4">审核通过<br />成功发布</p>
          </div>
        </JoinImg>

        <Section>
          <Title>
            <h3>他们都在用</h3>
            <p>面向不同行业，提供一站式行业解决方案</p>
          </Title>
          <SectionUl>
            <li className="section-3 first-icon"><img src="http://www.yuyu.com/assets/www/img/p-1.jpg" alt="p1"/></li>
            <li className="section-3 second-icon"><img src="http://www.yuyu.com/assets/www/img/p-2.jpg" alt="p1"/></li>
            <li className="section-3 third-icon"><img src="http://www.yuyu.com/assets/www/img/p-3.jpg" alt="p1"/></li>
            <li className="section-3 forth-icon"><img src="http://www.yuyu.com/assets/www/img/p-4.jpg" alt="p1"/></li>
            <li className="section-3 fifth-icon"><img src="http://www.yuyu.com/assets/www/img/p-5.jpg" alt="p1"/></li>
            <li className="section-3 sixth-icon"><img src="http://www.yuyu.com/assets/www/img/p-6.jpg" alt="p1"/></li>
            <li className="section-3 seventh-icon"><img src="http://www.yuyu.com/assets/www/img/p-7.jpg" alt="p1"/></li>
            <li className="section-3 eighth-icon"><img src="http://www.yuyu.com/assets/www/img/p-8.jpg" alt="p1"/></li>
          </SectionUl>
          <p className="saoyisao" style={{color: '#6FD7AF', fontSize: '15px', marginTop: '20px', textAlign: 'center', paddingBottom: '20px'}}>微信扫一扫即可查看小程序</p>
        </Section>


      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);