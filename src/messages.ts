import * as Line from '@line/bot-sdk';

export const getSendMessages = (): Line.Message[] => {
  return [
    {
      type: 'text',
      text: 'こんにちは！！'
    }
  ];
};
