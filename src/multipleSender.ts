import * as Line from '@line/bot-sdk';
import { getSendMessages } from './messages';
import lineConfig from './lineConfig';
import sendList from './sendList';

const lineClient = new Line.Client(lineConfig);
const messages = getSendMessages();
const initialIndex = 0;

const main = async (index: number) => {
  if(index === sendList.length) return;
  console.log(`${index} / ${sendList.length}`)
  const targetLineUserId = sendList[index];
  if (typeof targetLineUserId !== 'string' || targetLineUserId === '') {
    return Promise.reject(new Error('please set lineId to argument!'));
  }
  await lineClient.pushMessage(targetLineUserId, messages);

  setTimeout(() => main(index + 1), 300);
};

main(initialIndex).catch(error => {
  console.error(`[line send error] (${error.statusCode}) ${error.message}`);
});
