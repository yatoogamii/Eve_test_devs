import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { IEvent } from "app/interfaces/IEvent";
import { IUser, IDefaultUser } from "./../../interfaces/IUser";
import { getDataByFirebaseRefs } from "./../../tools/getDataByFirebaseRefs";

export const EventCard = ({ icon, name, startAt, endAt, needCar, createdByRef, location: { city, place } }: IEvent) => {
  const [createdBy, setCreatedBy] = useState<IUser | null>(null);
  useEffect(() => {
    getCreatedBy();
  })

  const getCreatedBy = async () => {
    setCreatedBy(await getDataByFirebaseRefs(createdByRef));
  }

  // if (createdBy) {
  return (
    <View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingTop: 20 }}>
        <Image style={{ width: 10, height: 10, marginRight: 5 }} source={{ uri: icon }} />
        <Text>{name}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingTop: 20 }}>
        <Text>{place}  ●  {city}</Text>
      </View>

      <View>
        <Image style={{ width: 20, height: 20, borderRadius: 50 }} source={{ uri: createdBy?.profilePicture }} />
        {createdBy?.firstName && <Text>Par {createdBy?.firstName}</Text>}
      </View>

      <View>
        <Text>{startAt}</Text>
        {endAt && <Text> - {endAt}</Text>}
      </View>
    </View>
  )
  // }

  // return (
  //   <View>
  //     <Text>Loading</Text>
  //   </View>
  // )


}