// react
import React from 'react';
import { Image } from "react-native";
// interfaces
import { IImageAbstract } from 'app/interfaces/abstracts/IImageAbstract';
// styles
import { ImageCustom } from "../../styles/abstracts/ImageCustomStyles";

export const ImageAbstract = (props: IImageAbstract) => {
  return (
    <ImageCustom {...props} />
  )
}