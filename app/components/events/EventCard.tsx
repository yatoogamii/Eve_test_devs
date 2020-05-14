// react
import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
// interfaces
import { IEvent } from "app/interfaces/events/IEvent";
import { IUser } from "../../interfaces/users/IUser";
// tools
import { getDataByFirebaseRefs } from "./../../tools/getDataByFirebaseRefs";
// styles
import { FlexColumn, FlexColumnAlignCenter, FlexRowJustifySpaceBetween } from "./../../styles/helpers/FlexStyles";
import { TextCustom } from "./../../styles/helpers/TypoStyles";
import { CardContainer, EventCarpoolingContainer, EventCreatedByContainer, EventPlaceContainer, EventNameContainer } from "../../styles/events/EventCardStyles";
// components
import { ImageAbstract } from "../abstracts/ImageAbstract";


export const EventCard = ({ icon, name, startAt, endAt, carpooling, createdByRef, location: { city, place } }: IEvent) => {
  const [createdBy, setCreatedBy] = useState<IUser | null>(null);
  const carIconUri = "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/events%2Ficon-car.png?alt=media&token=6d259372-5cee-486a-9d2b-21ae53f778fe";

  useEffect(() => {
    getCreatedBy();
  })

  const getCreatedBy = async () => {
    setCreatedBy(await getDataByFirebaseRefs(createdByRef));
  }

  return (
    <>
      <CardContainer windowDimensions={useWindowDimensions().width}>
        <FlexRowJustifySpaceBetween>
          <FlexColumn>

            <EventNameContainer>
              <ImageAbstract width="14" height="14" uri={icon} />
              <TextCustom color="#FFCE00" size="16">{name}</TextCustom>
            </EventNameContainer>

            {/* part place */}
            <EventPlaceContainer>
              <TextCustom color="#C4C4C4">{place}  ●  {city}</TextCustom>
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
              <ImageAbstract width="24" height="24" radius="50" uri={createdBy?.profilePicture} />
              <TextCustom color="#00FFF8" size="12">Par {createdBy?.firstName}</TextCustom>
            </EventCreatedByContainer>
          )}

          {/* part createdBy */}

          {/* part carpooling */}
          {carpooling && <EventCarpoolingContainer>
            <ImageAbstract width="18" height="10" radius="50" uri={carIconUri} />
          </EventCarpoolingContainer>}
          {/* part carpooling */}

        </FlexRowJustifySpaceBetween>
      </CardContainer>
    </>
  )
}