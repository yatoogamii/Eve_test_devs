// styled components
import styled from 'styled-components/native';

// Card
export const CardContainer = styled.View<{
  windowDimensions: number;
  isTodo?: boolean;
}>`
  width: ${(props) => props.windowDimensions - 32 + 'px'};
  height: ${(props) => (props.isTodo ? '72' : '104')}px;
  margin: 0 auto;
  background-color: #2b2b2b;
  border-radius: 24px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;
