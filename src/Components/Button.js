import styled from 'styled-components';

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? props.theme.colors.buttonsStateColors.normal : props.theme.colors.secondary};
  color: #FFF;
  border: none;
  font-size: 1em;
  padding: 0.45em 1em;
  border-radius: 6px;
  margin: 5px;
  box-shadow : ${(props) => props.shadow ? `2px 3px 15px  rgba(185,185,185)` : "0 0 0 0 0"};
  /*  hover */
  &:hover {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.hover};
    cursor: pointer;
  }
  /* active */
  &:active {
    background-color: ${(props) => props.theme.colors.buttonsStateColors.active};
  }
`;
export default StyledButton ;

