import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  margin-top: 70px;
`

export const MainBanner = styled.div`
  width: 100%;
  height: 600px;
  background: url('http://www.yuyu.com/assets/www/img/banner-06.jpg') top center no-repeat;
  border-bottom: 3px #d7d7d7 solid;
  position: relative;
  .text-container {
    width: 100%;
    max-width: 1200px;
    min-width: 480px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title-zh {
      display: block;
      font-size: 56px;
      font-weight: 400;
      text-align: center;
    }
    .title-eng {
      margin-top: 18px;
      font-size: 28px;
      text-align: center;
    }
    .join-btn {
      margin-top: 30px;
      color: #fff;
      padding: 8px 25px;
      font-size: 30px;
      border: 1px solid #fff;
      border-radius: 30px;
      letter-spacing: 1px;
      text-align: center;
      &:hover {
        background-color: #fff;
        color: #6fd7af;
      }
      transition: all .2s ease-in-out;
    }
  }
`

export const Section = styled.section`
  display: block;
  width: 100%;
  padding-top: 30px;
  max-width: 1200px;
  min-width: 680px;
  margin: 0 auto;
  hr {
    background-color: #e6e6e6;
    height: 2px;
    border: none;
    width: 92%;
    margin: 0 auto;
  }
`

export const Title = styled.div`
  width: 100%;
  h3 {
    line-height: 2.5;
    font-size: 26px;
    color: #242424;
    letter-spacing: 1px;
    font-weight: 300;
    text-align: center;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
  }
`

export const SectionUl = styled.ul`
  width: 100%;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .section-1 {
    display: block;
    width: 143px;
    height: 30px;
    padding-top: 180px;
    margin: 0 35px;
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    background: url('http://www.yuyu.com/assets/www/img/icon-1.png') no-repeat;
  }
  .first-icon {
    background-position: 0 0;
  }
  .second-icon {
    background-position: -143px 0;
  }
  .third-icon {
    background-position: -286px 0;
  }
  .forth-icon {
    background-position: -429px 0;
  }
  .fifth-icon {
    background-position: -572px 0;
  }

  .section-2 {
    display: block;
    width: 190px;
    margin: 10px 10px 0 10px;
    color: #4D4D4D;
    h3 {
      font-size: 40px;
      font-weight: 300;
    }
    h4 {
      margin-top: 20px;
      font-size: 22px;
      font-weight: 300;
    }
    p {
      font-size: 14px;
      color: #8F8F8F;
      font-weight: 300;
      margin-top: 20px;
    }
  }

  .section-3 {
    display: block;
    padding: 5px;
    border: 2px #5adea6 solid;
    border-radius: 10px;
    background: #9edbd3;
    margin: 34px 34px 0;
  }
`

export const JoinImg = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background: url('http://www.yuyu.com/assets/www/img/bg-1.png') repeat-x;
  .img-container {
    width: 990px;
    margin: 0 auto;
    position: relative;
    color: #fff;
    .banner-02 {
      display: block;
      margin-top: 46px;
    }
    p {
      position: absolute;
      font-size: 16px;
      line-height: 1.5;
    }
    .step1 {
      top: 0;
      right: 300px;
    }
    .step2 {
      top: 336px;;
      left: 4px;
    }
    .step3 {
      bottom: 4px;
      left: 316px;
    }
    .step4 {
      top: 336px;;
      right: 90px;
    }
  }
`