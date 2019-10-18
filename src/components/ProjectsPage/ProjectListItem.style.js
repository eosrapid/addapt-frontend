import styled from '@emotion/styled';


export const ProjectListItemWrapper = styled.div`
display:block;
position:relative;
width:100%;
padding:4px 4px;
background:transparent;
cursor:pointer;
color:#eee;
font-size:24px;
border-top:1px solid rgba(200,200,200,0.2);
&:first-child {
  border-top:1px solid transparent;
}
&.create {
  text-align:center;
  padding-top:12px;
  padding-bottom:12px;
  background:#222;
  font-weight:500;
  
}
&:hover {
  background:#181818;
  color:#fff;
}
&:active {
  background:#333;
  color:#fff;
}

`;