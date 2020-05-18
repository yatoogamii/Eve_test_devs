// styled components
import styled from 'styled-components/native';

export const TextCustom = styled.Text<any>`
  color: ${({color}) => color || 'white'};
  font-size: ${({size}) => size || '12'}px;
  font-family: ${({weight}) =>
    weight ? 'Gordita-' + weight : 'Gordita-Medium'};
  padding-top: ${({pTop}) => (pTop ? pTop : '0')};
  padding-right: ${({pRight}) => (pRight ? pRight : '0')}px;
  padding-bottom: ${({pBottom}) => (pBottom ? pBottom : '0')}px;
  padding-left: ${({pLeft}) => (pLeft ? pLeft : '0')}px;
  margin-top: ${({mTop}) => (mTop ? mTop : '0')}px;
  margin-right: ${({mRight}) => (mRight ? mRight : '0')}px;
  margin-bottom: ${({mBottom}) => (mBottom ? mBottom : '0')}px;
  margin-left: ${({mLeft}) => (mLeft ? mLeft : '0')}px;
`;
