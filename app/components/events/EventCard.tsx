// react
import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
// interfaces
import { IEvent } from "../../interfaces/events/IEvent";
import { IUser } from "../../interfaces/users/IUser";
// tools
import { getDataByFirebaseRefs } from "./../../tools/getDataByFirebaseRefs";
import { getCardIcon } from './../../tools/getCardIcon';
// styles
import { FlexCustom } from "./../../styles/helpers/FlexStyles";
import { TextCustom } from "./../../styles/helpers/TypoStyles";
import { EventCarpoolingContainer, EventCreatedByContainer, EventPlaceContainer, EventNameContainer } from "./../../styles/events/EventCardStyles";
import { CardContainer } from "./../../styles/events/CardStyles";
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
      <FlexCustom direction="row" justifyContent="space-between">

        <FlexCustom direction="column">

          <EventNameContainer>
            <ImageAbstract width="14" height="14" source={cardIcon} />
            <TextCustom mLeft="9" color="#FFCE00" size="15">{name}</TextCustom>
          </EventNameContainer>

          <EventPlaceContainer>
            <TextCustom color="#C4C4C4" size="11" >{place}</TextCustom>
            <TextCustom mLeft="7" mRight="7" size="10" color="#C4C4C4">●</TextCustom>
            <TextCustom color="#C4C4C4" size="11">{city}</TextCustom>
          </EventPlaceContainer>

        </FlexCustom>

        <FlexCustom direction="column" alignItems="center" >
          <TextCustom color="#D8D8D8" size="16">{startAt}</TextCustom>
          {endAt && <TextCustom color="#C4C4C4"> - {endAt}</TextCustom>}
        </FlexCustom>

      </FlexCustom>

      <FlexCustom direction="row" justifyContent="space-between">

        {createdBy && (
          <EventCreatedByContainer>
            <ImageAbstract width="24" height="24" radius="50" source={{ uri: createdBy?.profilePicture }} />
            <TextCustom mLeft="9" color="#00FFF8" size="12">Par {createdBy?.firstName}</TextCustom>
          </EventCreatedByContainer>
        )}

        {carpooling && <EventCarpoolingContainer>
          <ImageAbstract width="18" height="10" radius="50" source={require('./../../assets/images/icon-car.png')} />
        </EventCarpoolingContainer>}

      </FlexCustom>

    </CardContainer>
  )
}