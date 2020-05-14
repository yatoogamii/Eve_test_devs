// styled components
import styled from 'styled-components/native';

export const TextCustom = styled.Text<any>`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.size || '12'}px;
  font-family: ${(props) => props.family || 'Gordita'};
`;
