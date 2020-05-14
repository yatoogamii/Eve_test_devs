// react
import React from 'react';
import { Image } from "react-native";
// interfaces
import { IImageAbstract } from 'app/interfaces/abstracts/IImageAbstract';
// styles
import { ImageCustom } from "../../styles/abstracts/ImageCustomStyles";

export const ImageAbstract = ({ width, height, radius, uri = "https://firebasestorage.googleapis.com/v0/b/eve-test-devs.appspot.com/o/users%2Ficon-anonyme.png?alt=media&token=8162f92c-67e6-4156-ba0a-744c62140fe9" }: IImageAbstract) => {
  return (
    <ImageCustom width={width} height={height} radius={radius} source={{ uri }} />
  )
}