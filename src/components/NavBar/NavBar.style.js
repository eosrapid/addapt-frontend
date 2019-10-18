import styled from '@emotion/styled';


export const NavBarWrapper = styled.div`
  flex:none;
  display: flex;
  z-index: 100;
  height: 40px;
  line-height: 40px;
  flex-shrink: 0;
  background-color: rgb(60, 60, 60);
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  color: rgb(212, 212, 212);
  outline: none;
  padding:0px 16px 0px 16px;

  .projectTitle {
    font-size:16px;
  }
  
  .buildBtnCon {
    padding:0px 8px 0px 8px;
    line-height: 40px;
    .buildBtnNav {
      padding:0;
      margin:0;
      font-size:16px;
      height:36px;
      padding-top:4px;
      font-family: inherit;
      outline:none;
      background:none;
      border:none;
      color: rgba(251, 176, 52, 0.4);
      cursor: pointer;
      &:hover {
        color: rgba(251, 176, 52, 0.8);
      }
      &:active {
        color: rgba(251, 176, 52, 1);
      }
    }
  }

`;