import styled from "styled-components/native"

export const MainTabBarContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0 2px;
  width: 100%;
  height: 92px;
  bottom: 0;
  background-color: white;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`
export const MainTabBarIconContainer = styled.TouchableOpacity<any>` 
  borderBottomWidth: 2px; 
  borderBottomColor: ${props => props.active ? '#00FF88' : 'white'}; 
  paddingBottom: 30px; 
  width: 40px;
  alignItems: center;
  borderBottomColor: ${props => props.active ? '#00FF88' : 'white'};
`

