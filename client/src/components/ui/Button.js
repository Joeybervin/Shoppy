import styled from 'styled-components';

const SmallButton = styled.button`

// =============> STATE : NORMAL 
  background: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: #FFF;
  border: none;
  font-size: 1em;
  padding:  10px 4px;
  border-radius: 7px;
  margin: 5px;
  box-shadow : ${(props) => props.shadow ? `rgba(0, 0, 0, 0.24) 0px 3px 8px` : "0 0 0 0 0"};

  // =============> STATE : HOVER 
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.hover};
    /*   A REVOIR
    box-shadow: 0px 15px 20px rgba(255, 255, 255, 0.4);
    transform: translateY(-7px); */
    cursor: pointer;
  }

  // =============> STATE : FOCUS 
  &:focus {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.active};
  }

  // =============> STATE : DISABLED 
  &:disabled {
    background-color: ${(props) => props.primary ? props.theme.colors.buttonsStateColors.disabledDark : props.theme.colors.buttonsStateColors.disabledLight};
  }
`;

const BigButton = styled(SmallButton)`
  padding: 10px 18px;
`;

export {SmallButton, BigButton};

