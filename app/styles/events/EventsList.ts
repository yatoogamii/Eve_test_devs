import styled from 'styled-components/native';

export const EventsListTitleContainer = styled.View`
  margin: 0 0 10px 20px;
`;

export const EventsListContainer = styled.SafeAreaView<{
  height: number;
}>`
  height: ${({height}) => height - 100 - 92}px;
`;
