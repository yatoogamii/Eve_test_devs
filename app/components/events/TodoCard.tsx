// react
import React, { useState, useEffect } from 'react';
import { useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
// interfaces
import { IEvent } from './../../interfaces/events/IEvent';
import { ITodo } from './../../interfaces/events/ITodo';
// tools
import { getDataByFirebaseRefs } from './../../tools/getDataByFirebaseRefs';
// styles
import { CardContainer } from './../../styles/events/CardStyles';
import { FlexCustom } from "./../../styles/helpers/FlexStyles";
import { TodoNameContainer, TodoEventNameContainer, TodoFinishButtonContainer } from "./../../styles/events/TodoCardStyles";
import { ImageAbstract } from '../abstracts/ImageAbstract';
import { TextCustom } from './../../styles/helpers/TypoStyles';

export const TodoCard = ({ name, eventRef, todoId, updateTodo }: ITodo) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [todoFinished, setTodoFinished] = useState(false);

  useEffect(() => {
    getEvent();
  }, [])

  const getEvent = async () => {
    try {
      setEvent(await getDataByFirebaseRefs(eventRef));
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <CardContainer isTodo={true} windowDimensions={useWindowDimensions().width}>
      <FlexCustom justifyContent="space-between" alignItems="center">

        <FlexCustom direction="column">
          <TodoNameContainer>
            <ImageAbstract width="14" height="14" source={require('./../../assets/images/icon-star.png')} />
            <TextCustom mLeft="9" color="#FFCE00" size="15">{name}</TextCustom>
          </TodoNameContainer>

          <TodoEventNameContainer>
            <TextCustom mRight="5" size="9" color="#C4C4C4">●</TextCustom>
            <TextCustom mLeft="4" color="#C4C4C4" size="11">Pour {event?.name}</TextCustom>
          </TodoEventNameContainer>
        </FlexCustom>

        <TouchableWithoutFeedback onPress={() => updateTodo(todoId)}>
          <TodoFinishButtonContainer>
            {todoFinished && <ImageAbstract width='13' height="13" source={require('./../../assets/images/icon-check.png')} />}
          </TodoFinishButtonContainer>
        </TouchableWithoutFeedback>

      </FlexCustom>
    </CardContainer >

  )

} 