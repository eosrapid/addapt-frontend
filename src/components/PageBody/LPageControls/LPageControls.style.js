import styled from '@emotion/styled';
export default (styled.div`
background: #333333;
display:flex;
flex-direction: column;
flex-flow: column nowrap;
width:50px;
text-align: center;
& > .flsItem {
  display:block;
  width:50px;
  height:50px;
  line-height:50px;
  padding:0;
  margin:4px 0px 4px 0px;
  font-size:32px;
  text-align: center;
  cursor:pointer;
  color:rgba(255, 255, 255, 0.6);
  &:hover {
    color:rgba(255, 255, 255, 0.9);
  }
  &:active {
    color:rgba(255, 255, 255, 1);
  }
  &.active {
    color:rgba(255, 255, 255, 1) !important;
  }
}
`);