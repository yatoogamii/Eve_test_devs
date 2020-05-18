import {capitalize} from './../../app/tools/capitalize';

test('transform friday to Friday', () => {
  expect(capitalize('friday')).toMatch('Friday');
});

test('transform saturday 13 may to Saturday 13 may', () => {
  expect(capitalize('saturday 13 may')).toMatch('Saturday 13 may');
});
