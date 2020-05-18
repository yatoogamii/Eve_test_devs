// react
import React, { useState, useEffect, useRef } from "react";
import { useWindowDimensions, Animated } from "react-native";
// interfaces
import { IEvent } from "../../interfaces/events/IEvent";
import { IUser } from "../../interfaces/users/IUser";
// tools
import { getDataByFirebaseRefs } from "./../../tools/getDataByFirebaseRefs";
import { getCardIcon } from './../../tools/getCardIcon';
// styles
import { FlexColumn, FlexColumnAlignCenter, FlexRowJustifySpaceBetween } from "./../../styles/helpers/FlexStyles";
import { TextCustom } from "./../../styles/helpers/TypoStyles";
import { EventCarpoolingContainer, EventCreatedByContainer, EventPlaceContainer, EventNameContainer } from "./../../styles/events/EventCardStyles";
import { CardContainer } from "./../../styles/events/CardStyles";
import { MoveOnX } from "./../../styles/animations/MoveOnX";

// components
import { ImageAbstract } from "../abstracts/ImageAbstract";


export const EventCard = ({ icon, name, startAt, endAt, carpooling, createdByRef, location: { city, place } }: IEvent) => {
  const [createdBy, setCreatedBy] = useState<IUser | null>(null);
  const cardIcon = getCardIcon(icon);

  useEffect(() => {
    getCreatedBy();
  }, [])

  const getCreatedBy = async () => {
    try {
      setCreatedBy(await getDataByFirebaseRefs(createdByRef));
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <CardContainer windowDimensions={useWindowDimensions().width}>
      <FlexRowJustifySpaceBetween>
        <FlexColumn>

          <EventNameContainer>
            <ImageAbstract width="14" height="14" source={cardIcon} />
            <TextCustom mLeft="9" color="#FFCE00" size="15">{name}</TextCustom>
          </EventNameContainer>

          {/* part place */}
          <EventPlaceContainer>
            <TextCustom color="#C4C4C4" size="11" >{place}</TextCustom>
            <TextCustom mLeft="7" mRight="7" size="10" color="#C4C4C4">●</TextCustom>
            <TextCustom color="#C4C4C4" size="11">{city}</TextCustom>
          </EventPlaceContainer>
          {/* part place */}

        </FlexColumn>

        {/* part hours */}
        <FlexColumnAlignCenter>
          <TextCustom color="#D8D8D8" size="16">{startAt}</TextCustom>
          {endAt && <TextCustom color="#C4C4C4"> - {endAt}</TextCustom>}
        </FlexColumnAlignCenter>
        {/* part hours */}

      </FlexRowJustifySpaceBetween>
      <FlexRowJustifySpaceBetween>

        {/* part createdBy */}
        {createdBy && (
          <EventCreatedByContainer>
            <ImageAbstract width="24" height="24" radius="50" source={{ uri: createdBy?.profilePicture }} />
            <TextCustom mLeft="9" color="#00FFF8" size="12">Par {createdBy?.firstName}</TextCustom>
          </EventCreatedByContainer>
        )}

        {/* part createdBy */}

        {/* part carpooling */}
        {carpooling && <EventCarpoolingContainer>
          <ImageAbstract width="18" height="10" radius="50" source={require('./../../assets/images/icon-car.png')} />
        </EventCarpoolingContainer>}
        {/* part carpooling */}

      </FlexRowJustifySpaceBetween>
    </CardContainer>
  )
}