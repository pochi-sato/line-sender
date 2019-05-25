import * as Line from '@line/bot-sdk';
import { getSendMessages } from './messages';
import lineConfig from './line-config';

const lineClient = new Line.Client(lineConfig);

const main = (messages: Line.Message[]) => {
  const arg = process.argv[2];
  if (typeof arg !== 'string' || arg === '') {
    return Promise.reject(new Error('please set lineId to argument!'));
  }
  return lineClient.pushMessage(arg, messages).catch(error => {
    return Promise.reject(
      new Error(`[line send error] (${error.statusCode}) ${error.message}`)
    );
  });
};

main(getSendMessages())
  .then(() => console.log('success!!'))
  .catch(error => console.error(error));
