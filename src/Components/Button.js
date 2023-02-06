import styled from 'styled-components';

const StyledButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: #FFF;
  border: none;
  font-size: 1em;
  padding: 0.45em 1em;
  border-radius: 6px;
  /*  hover */
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
  /* active */
  &:active {
    background-color: var(--black);
  }
`;
export default StyledButton ;

