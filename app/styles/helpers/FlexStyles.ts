// styled components
import styled from 'styled-components/native';

export const FlexRowJustifySpaceBetween = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexColumn = styled.View``;

export const FlexColumnAlignCenter = styled.View`
  align-items: center;
`;

export const FlexRowJustifySpaceBetweenAlignCenter = styled(
  FlexRowJustifySpaceBetween,
)`
  align-items: center;
`;
