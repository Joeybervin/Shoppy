import styled from "styled-components";

const RadioLabel = styled.label`
  align-items: center;
  display: flex;
  padding : 8px 20px;
    
    cursor : pointer;
    transition : border-bottom 0.1s;
    transition : background-color 0.1s;
`

const RadioInput = styled.input.attrs(() => ({
    type: "radio"
}))`
    display : none;
`

export { RadioInput, RadioLabel }
