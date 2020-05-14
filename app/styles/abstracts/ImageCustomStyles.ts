// styled components
import styled from 'styled-components/native';

// interfaces
import {IImageAbstract} from './../../interfaces/abstracts/IImageAbstract';

export const ImageCustom = styled.Image<IImageAbstract>`
  width: ${(props) => props.width || '20'}px;
  height: ${(props) => props.height || '20'}px;
  border-radius: ${(props) => props.radius || 0};
`;
