import * as React from "react";
import styled from "styled-components";
const GridWrapper = styled.section`    
display: grid;    
grid-template-columns: 1fr 1fr 1fr;   
 grid-gap: 15px;  
 `;
const Grid = (props) => {
  return <GridWrapper>{props.children}</GridWrapper>;
};
export default Grid;
