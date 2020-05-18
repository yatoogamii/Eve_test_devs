// styled components
import styled from 'styled-components/native';

// interfaces
import {IImageAbstract} from './../../interfaces/abstracts/IImageAbstract';

export const ImageCustom = styled.Image<IImageAbstract>`
  width: ${(props) => props.width || '20'}px;
  height: ${(props) => props.height || '20'}px;
  border-radius: ${(props) => props.radius || 0};
  padding-top: ${({pTop}) => (pTop ? pTop : '0')};
  padding-right: ${({pRight}) => (pRight ? pRight : '0')}px;
  padding-bottom: ${({pBottom}) => (pBottom ? pBottom : '0')}px;
  padding-left: ${({pLeft}) => (pLeft ? pLeft : '0')}px;
  margin-top: ${({mTop}) => (mTop ? mTop : '0')}px;
  margin-right: ${({mRight}) => (mRight ? mRight : '0')}px;
  margin-bottom: ${({mBottom}) => (mBottom ? mBottom : '0')}px;
  margin-left: ${({mLeft}) => (mLeft ? mLeft : '0')}px;
`;
