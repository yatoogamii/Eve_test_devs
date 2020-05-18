import {getCardIcon} from './../../app/tools/getCardIcon';

test('get good path for triangle icon ', () => {
  expect(getCardIcon('triangle')).toMatchObject({
    testUri: '../../../app/assets/images/icon-triangle.png',
  });
});

test('get good path for ellipse icon ', () => {
  expect(getCardIcon('ellipse')).toMatchObject({
    testUri: '../../../app/assets/images/icon-ellipse.png',
  });
});

test('get good path for star icon ', () => {
  expect(getCardIcon('star')).toMatchObject({
    testUri: '../../../app/assets/images/icon-star.png',
  });
});
