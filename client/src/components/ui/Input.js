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
    margin : 5px 0;

    &::placeholder { 
        color: ${props => props.theme.colors.inputPlaceholder};;
        opacity: 1; 
    }

    &::-ms-input-placeholder {
        color: ${props => props.theme.colors.inputPlaceholder};;
    }

    &:focus , &:active{
        border : 2px solid ${props => props.theme.colors.primaryAlpha} ;
    }
    &:focus { 
        outline: none !important;
        border-color: #719ECE;
    }
`
const TextAreaInput = styled.textarea`
    border : 2px solid black ;
    border-radius : 10px ;
    width : 100%;
    padding : 5px 5px 5px 15px;
    &::placeholder { 
        font-family: ${(props) => props.theme.fonts.primaryFont || props.theme.fonts.secondaryFont};
        color: ${props => props.theme.colors.inputPlaceholder};;
        opacity: 1; 
    }

    &::-ms-input-placeholder {
        color: ${props => props.theme.colors.inputPlaceholder};;
    }

    &:focus , &:active{
        border : 2px solid ${props => props.theme.colors.primaryAlpha} ;
    }
    &:focus { 
        outline: none !important;
        border-color: #719ECE;
    }
`

export { RadioInput, RadioLabel , TextInput, TextLabel, TextAreaInput }


