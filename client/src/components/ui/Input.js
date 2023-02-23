import styled from "styled-components";


//  ================> RADIO INPUT 
//  ---> label
const RadioLabel = styled.label`
  align-items: center;
  display: flex;
  padding : 8px 20px;
    
    cursor : pointer;
    transition : border-bottom 0.1s;
    transition : background-color 0.1s;
`
//  --->  input
const RadioInput = styled.input.attrs(() => ({
    type: "radio"
}))`
    display : none;
`

// ================> TEXT INPUT
//  ---> label
const TextLabel = styled.label`
  align-items: center;
  display: flex;
  padding : 8px 20px;
    
    cursor : pointer;
    transition : border-bottom 0.1s;
    transition : background-color 0.1s;
`
//  --->  input
const TextInput = styled.input`
    border : 2px solid black ;
    border-radius : 10px ;
    width : 100%;
    padding : 6px 6px 6px 11px;

    &:focus , &:active{
        border : 2px solid ${props => props.theme.colors.primaryAlpha} ;
    }
`
const TextAreaInput = styled.textarea`
    border : 2px solid black ;
    border-radius : 10px ;
    width : 100%;
    padding : 5px 5px 5px 15px;
`

export { RadioInput, RadioLabel , TextInput, TextLabel, TextAreaInput }


