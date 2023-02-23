import styled from 'styled-components';

const SmallButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? props.theme.colors.buttonsStateColors.normal : props.theme.colors.secondary};
  color: #FFF;
  border: none;
  font-size: 1em;
  padding: 1px 10px;
  border-radius: 7px;
  margin: 5px;
  box-shadow : ${(props) => props.shadow ? `rgba(0, 0, 0, 0.24) 0px 3px 8px` : "0 0 0 0 0"};

  /*  hover */
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.hover};
    /*   A REVOIR
    box-shadow: 0px 15px 20px rgba(255, 255, 255, 0.4);
    transform: translateY(-7px); */
    cursor: pointer;
  }

  /* active */
  &:active {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.active};
  }
  &:disabled {
    background-color: ${(props) => props.primary ? props.theme.colors.buttonsStateColors.disabledDark : props.theme.colors.buttonsStateColors.disabledLight};
  }
`;

const BigButton = styled(SmallButton)`
  padding: 8px 15px;
`;

export {SmallButton, BigButton};

