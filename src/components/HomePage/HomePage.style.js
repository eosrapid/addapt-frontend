import styled from '@emotion/styled';
export default (styled.div`

display: grid;
grid-template-areas: "header header header"
                     "navigation main ads"
                     "footer footer footer";

grid-template-columns: 150px 1fr 150px;

grid-template-rows: 100px 1fr 30px;

min-height: 100vh;

/* Define grid areas */
.hg-header { grid-area: header; }
.hg-footer { grid-area: footer; }
.hg-main { grid-area: main; }
.hg-left { grid-area: navigation; }
.hg-right { grid-area: ads; }


`);