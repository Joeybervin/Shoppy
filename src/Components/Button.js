import styled from 'styled-components';
import '../App/App.css';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "rgb(152, 152, 255)" };
  color: #FFF;
  border: none;
  font-size: 1em;
  padding: 0.45em 1em;
  border-radius: 6px;
`;


