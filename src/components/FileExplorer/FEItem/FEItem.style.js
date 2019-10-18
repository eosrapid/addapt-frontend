import styled from '@emotion/styled';
export default (styled.div`


    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-left:0;
    font-size:13px;
    i {

    }

    

    & > .feItemTop {
      position: relative;
      display: flex;
      cursor: pointer;
      padding-left: 5px;
      flex-shrink: 0;
      user-select: none;
      color: rgb(187, 187, 187);
      height: 22px;
      line-height:22px;
      outline: none;
      font-weight:400;

      button {
        padding: 0;
        cursor: pointer;
        background: none;
        border: none;
        outline:none;
      }
      & > .fld {
        flex-shrink: 0;
        background-size: 96%;
        background: none;
        position: relative;

        height: 100%;
        width: 18px;
        opacity: 0;
        transition: transform 0.1s ease 0s;
        background-repeat: no-repeat;
        background-position: center center;
      }
      & > .hoverControls {
        opacity: 0;
        width: 0px;
        overflow: hidden;
        transition: opacity 0.1s ease 0s;
        display: flex;
        flex-shrink: 0;
        -webkit-box-pack: end;
        justify-content: flex-end;
        vertical-align: middle;
        
        
        font-size:16px;
        line-height:22px;
        height:22px;
        .hcBtn {
          color:#eee;
          padding:0px 4px;
          font-size:16px;
          line-height:22px;
          &:hover {
            background:rgba(100,100,100,0.25);
          }
          

        }
      }
      &:hover > .hoverControls {
        width: auto;
        opacity: 1;
        padding-right:4px;
        height:22px;
      }
      &:hover {
        background:#2A2D2E;
      }
      & > i {
        font-style:normal;
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        color: inherit;
        width: 100%;
        height: 100%;
        -webkit-box-flex: 1;
        flex-grow: 1;
        font: inherit;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        outline: none;
        background: none;
        padding: 0px;
        font-style:normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break:break-all;
        max-width:100%;
      }
      & > *{
        z-index: 1;
      }
    }
    &.folder.expand > .feItemTop > .fld {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath transform='rotate(-45 6.025050640106198,8) ' d='m8.853051,10.793l-5.656,0l5.656,-5.586l0,5.586z' fill='%23E8E8E8'/%3E%3C/svg%3E");
      transform: rotate(45deg);
      background-size:96%;
    }
    &.folder > .feItemTop {
      font-weight:400;
    }
    &.folder > .feItemTop > .fld {
      opacity:1;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23E8E8E8' d='M6 4v8l4-4-4-4zm1 2.414L8.586 8 7 9.586V6.414z'/%3E%3C/svg%3E");
      transform: rotate(0deg);
    }


    .children {
      display:none;
      width:100%;
      margin:0;
      padding:0;
      outline:none;
      border:none;
    }
    &.folder.expand > .children {
      display:block;
    }

`);