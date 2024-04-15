import { getTestID } from 'helpers/getTestID/getTestID';

export const TEST_ID = {
  IMAGE: 'IMAGE',
};

export const testID = getTestID({
  testID: TEST_ID,
  prefix: 'SLIDE',
});
