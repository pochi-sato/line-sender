import * as Line from '@line/bot-sdk';

// リマインド
export const getSendMessages = (): Line.Message[] => {
  return [
    {
      "type": "image",
      "originalContentUrl": "https://storage.googleapis.com/cocolocala-plans-line-images/%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B.png",
      "previewImageUrl":    "https://storage.googleapis.com/cocolocala-plans-line-images/%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B.png",
    },
  ];
};

// ヒアリング
// export const getSendMessages = (): Line.Message[] => {
//   return [
//     {
//       "type": "image",
//       "originalContentUrl": "https://storage.googleapis.com/cocolocala-plans-line-images/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%94%B9%E5%96%84%E5%8D%94%E5%8A%9B%E3%81%AE%E3%81%8A%E9%A1%98%E3%81%84.png",
//       "previewImageUrl":    "https://storage.googleapis.com/cocolocala-plans-line-images/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%94%B9%E5%96%84%E5%8D%94%E5%8A%9B%E3%81%AE%E3%81%8A%E9%A1%98%E3%81%84.png",
//     },
//     {
//       type: 'text',
//       text: '↓こちらから、アンケート回答をお願いします。\nhttps://zubora.typeform.com/to/gSgwpF'
//     },
//   ];
// };
