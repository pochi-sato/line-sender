import * as Line from '@line/bot-sdk';
import { getSendMessages } from './messages';
import lineConfig from './lineConfig';

const lineClient = new Line.Client(lineConfig);

const main = (messages: Line.Message[]) => {
  const targetLineUserId = process.argv[2];
  if (typeof targetLineUserId !== 'string' || targetLineUserId === '') {
    return Promise.reject(new Error('please set lineId to argument!'));
  }
  return lineClient.pushMessage(targetLineUserId, messages).catch(error => {
    return Promise.reject(
      new Error(`[line send error] (${error.statusCode}) ${error.message}`)
    );
  });
};

main(getSendMessages())
  .then(() => console.log('success!!'))
  .catch(error => console.error(error));
