import styled from '@emotion/styled';
export default (styled.div`
width: 100%;
overflow-x: auto;
white-space: nowrap;
overflow-y: hidden;
background-color: rgb(37, 37, 38);
display:flex;
height:39px;
.cpTab {
  display: inline-flex;
  font-size: 13px;
  cursor: pointer;
  font-family: Lato;
  font-weight: 400;
  line-height: 38px;
  height: 38px;
  min-width: 110px;
  position: relative;
  background-color: rgb(45, 45, 45);
  color: rgba(255, 255, 255, 0.25);
  opacity: 1;
  font-style: normal;
  padding: 0px 5px;
  border-right: 1px solid rgb(37, 37, 38);
  border-bottom: none;
  cursor:pointer;
  margin:0;

  &.active {
    background-color: rgb(30, 30, 30);
    color: rgb(255, 255, 255);
  }
  .title {
    flex-grow: 1;
    overflow: hidden;
    cursor:pointer;
    padding-left:12px;
  }
  .btn {
    outline:none;
    border:none;
    background:transparent;
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    font-size: 11px;
    position: relative;
    flex-shrink: 0;
    font-variant: normal;
    padding: 4px;
    margin: auto 0px auto 5px;
    cursor:pointer;
    color:inherit;
    width: 16px;
    text-align: center;
  }
  .btn:hover {
    color:#eee;
  }
  &.edited > .btn > i.fi-x:before {
    content: "\f112";
    
  }
  &.edited > .btn:hover > i.fi-x:before {
    content: "\f217";
  }
}`);