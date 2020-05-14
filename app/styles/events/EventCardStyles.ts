// styled components
import styled from 'styled-components/native';

// Card
export const CardContainer = styled.View<{windowDimensions: number}>`
  width: ${(props) => props.windowDimensions - 32 + 'px'};
  height: 104px;
  margin: 0 auto;
  background-color: #2b2b2b;
  border-radius: 24px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

// Name
export const EventNameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  width: 110px;
`;

// Place
export const EventPlaceContainer = styled.View`
  margin-left: 23px;
`;
// CreatedBy
export const EventCreatedByContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;
  width: 85px;
`;

// Carpooling
export const EventCarpoolingContainer = styled.View`
  justify-content: center;
  background-color: #525252;
  border-radius: 50;
  width: 28px;
  height: 28px;
  align-items: center;
  margin-left: auto;
`;
