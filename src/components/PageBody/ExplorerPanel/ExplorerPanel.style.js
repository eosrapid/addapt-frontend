import styled from '@emotion/styled';
export default (styled.div`
background:rgb(37, 37, 38);
display:flex;
flex-direction: column;
flex-flow: column nowrap;
width:220px;
text-align: left;
padding:0;
margin:0;
.explorerTitle {
  height:30px;
  line-height:30px;
  text-align: left;
  font-weight:300;
  flex-shrink:0;
  display:block;
  width:100%;
  overflow:hidden;
  padding:0px 12px;
  margin:0;
  
}
.explorerBody {
  display:block;
  width:100%;
  overflow:hidden;
  flex-grow:1;
  text-align: left;
  padding:0;
  margin:0;
}
`);