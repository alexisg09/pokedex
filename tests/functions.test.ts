import { findColorFromType } from '../components/ItemDetails';

test('Should return the correct colorTypeCombo given a specific type', () => {
  console.log(findColorFromType('Combat'));
  expect(findColorFromType('Combat')).toStrictEqual({
    type: 'Combat',
    color: 'coral',
  });
});
