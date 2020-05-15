// react
import React, { useState, useEffect } from 'react';
import { useWindowDimensions, View, TouchableWithoutFeedback } from 'react-native';
// interfaces
import { ITodo, IEvent } from './../../interfaces/events/IEvent';
// tools
import { getDataByFirebaseRefs } from './../../tools/getDataByFirebaseRefs';
// styles
import { CardContainer } from './../../styles/events/CardStyles';
import { FlexRowJustifySpaceBetween, FlexColumn, FlexColumnAlignCenter, FlexRowJustifySpaceBetweenAlignCenter } from "./../../styles/helpers/FlexStyles";
import { TodoNameContainer, TodoEventNameContainer, TodoFinishButtonContainer } from "./../../styles/events/TodoCardStyles";
import { ImageAbstract } from '../abstracts/ImageAbstract';
import { TextCustom } from './../../styles/helpers/TypoStyles';

export const TodoCard = ({ name, icon, eventRef, personsAssigned }: ITodo) => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [todoFinished, setTodoFinished] = useState(false);

  useEffect(() => {
    getEvent();
  }, [])

  const getEvent = async () => {
    setEvent(await getDataByFirebaseRefs(eventRef));
  }

  return (
    <CardContainer isTodo={true} windowDimensions={useWindowDimensions().width}>
      <FlexRowJustifySpaceBetweenAlignCenter>

        <FlexColumn>
          <TodoNameContainer>
            <ImageAbstract width="14" height="14" uri={icon} />
            <TextCustom color="#FFCE00" size="16">{name}</TextCustom>
          </TodoNameContainer>

          <TodoEventNameContainer>
            <TextCustom color="#C4C4C4">●  {event?.name}</TextCustom>
          </TodoEventNameContainer>
        </FlexColumn>

        <TouchableWithoutFeedback onPress={() => setTodoFinished(true)}>
          <TodoFinishButtonContainer>
            {todoFinished && <ImageAbstract width="18" height="10" radius="50" uri={"https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/global%2Ficon-correct.png?alt=media&token=71b6c9d9-2f66-4f04-a608-b49bcda531fc"} />}
          </TodoFinishButtonContainer>
        </TouchableWithoutFeedback>

      </FlexRowJustifySpaceBetweenAlignCenter>
    </CardContainer >
  )

} 