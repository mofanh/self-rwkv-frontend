import { xfSparkRequest } from "@/services/ai/http/xfSparkrController";

export const timestamp2string = (timestamp: number) => {
    return new Date(timestamp).toString();
}

export const queryChatBot = ()=> {
    return xfSparkRequest({
        max_tokens: 4096,
        top_k: 4,
        temperature: 0.5,
        messages: [
          {
            role: 'system',
            content: '',
          },
          {
            role: 'user',
            content: 'hi',
          },
        ],
        model: '4.0Ultra',
        // "stream": true,
      })
    //   .then((res) => {
    //     console.log('res?.choices[0].message.content--', res?.choices[0].message.content)
    //   });
}