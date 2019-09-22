import styled from 'styled-components';


export const FooterWrapper = styled.footer`
  width: 100%;
  .ps-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .warning {
      display: block;
      img {
        display: block;
        float: left;
        margin-top: 2px;
      }
      p {
        display: block;
        float: left;
        line-height: 26px;
      }
    }
  }
`

export const Relative = styled.div`
  width: 100%;
  height: 50px;
  background-color: #333;
  .text {
    text-align: center;
    color: #b0b0b0;
    font-size: 14px;
    line-height: 50px;
    a { text-decoration: none; font-size: 14px;}
    a:link { color: #00A2CA; }
    a:visited { color: #00A2CA; }
    a:hover { color: #00A2CA; text-decoration: underline;  }
    a:active { color: #00A2CA; }
  }
`