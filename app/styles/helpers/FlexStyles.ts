// styled components
import styled from 'styled-components/native';
// interfaces
import {IFlexStyle} from '../../interfaces/helpers/IFlexStyles';

export const FlexCustom = styled.View<IFlexStyle>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
`;
