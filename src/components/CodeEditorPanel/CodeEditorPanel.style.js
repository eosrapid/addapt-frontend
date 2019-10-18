import styled from '@emotion/styled';
export default (styled.div`
background-color: #1e1e1e;
display:flex;
flex-direction: column;
flex-flow: column nowrap;
flex-grow: 1;
.codePanelTop {
  flex-shrink: 0;
}
.codePanelBody {
  display:block;
  flex-grow:1;
  padding:0;
  margin:0;
  outline:none;
  border:none;
  position: relative;
  top:0;
  left:0;
  width:100%;
  height:100%;
  overflow:hidden;
}
.editorCon {
  display:block;
  width:100%;
  height:100%;
}`);