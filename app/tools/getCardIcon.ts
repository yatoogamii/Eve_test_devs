export const getCardIcon = (icon: string) => {
  switch (icon) {
    case 'ellipse':
      return require('./../assets/images/icon-ellipse.png');
      break;
    case 'star':
      return require('./../assets/images/icon-star.png');
      break;
    case 'triangle':
      return require('./../assets/images/icon-triangle.png');
      break;
  }
};
